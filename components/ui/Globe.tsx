"use client";

import { useEffect, useRef } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Node;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

const numbersOfRings: { id: number }[] = [{ id: 0 }];

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe>(null);

  const defaultProps = {
    pointSize: globeConfig.pointSize ?? 1,
    atmosphereColor: globeConfig.atmosphereColor ?? "#ffffff",
    showAtmosphere: globeConfig.showAtmosphere ?? true,
    atmosphereAltitude: globeConfig.atmosphereAltitude ?? 0.1,
    polygonColor: globeConfig.polygonColor ?? "rgba(255,255,255,0.7)",
    globeColor: globeConfig.globeColor ?? "#1d072e",
    emissive: globeConfig.emissive ?? "#000000",
    emissiveIntensity: globeConfig.emissiveIntensity ?? 0.1,
    shininess: globeConfig.shininess ?? 0.9,
    arcTime: globeConfig.arcTime ?? 2000,
    arcLength: globeConfig.arcLength ?? 0.9,
    rings: globeConfig.rings ?? 1,
    maxRings: globeConfig.maxRings ?? 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  };

  const _buildData = () => {
    const points = data;
    if (globeRef.current) {
      globeRef.current
        .hexPolygonsData(points)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => {
          return defaultProps.polygonColor;
        });
      startAnimation();
    }
  };

  const startAnimation = () => {
    if (!globeRef.current || !data) return;

    globeRef.current
      .arcsData(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcStartLat((d: any) => d.startLat * 1)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcStartLng((d: any) => d.startLng * 1)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcEndLat((d: any) => d.endLat * 1)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcEndLng((d: any) => d.endLng * 1)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcColor((e: any) => e.color)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcAltitude((e: any) => {
        return e.arcAlt * 1;
      })
      .arcStroke(() => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .arcDashInitialGap((e: any) => e.order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pointColor((e: any) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .ringColor(() => (t: any) => `rgba(255,255,255, ${1 - t})`)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  };

  useEffect(() => {
    if (!globeRef.current || !data) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !data) return;
      numbersOfRings.push({ id: Date.now() });
      globeRef.current.ringsData(numbersOfRings);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && !globeRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const globeInstance = new (ThreeGlobe as any)();
      globeRef.current = globeInstance;
      container.appendChild(globeInstance);
      _buildData();
      _buildMaterial();
    }
    // Cleanup
    return () => {
      if (container && globeRef.current) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
        globeRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} />
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size.width, size.height]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas
      scene={scene}
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight || "#bbbbbb"} intensity={0.3} />
      <directionalLight
        color={globeConfig.directionalLeftLight || "#ffffff"}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight || "#ffffff"}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight || "#ffffff"}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
