import FuturisticHero from "../components/FuturisticHero";
import GlassAbout from "../components/GlassAbout";
import FloatingProjects from "../components/FloatingProjects";
import SkillsGalaxy from "../components/SkillsGalaxy";
import TimelineExperience from "../components/TimelineExperience";
import ContactPortal from "../components/ContactPortal";
import NightSkyNav from "../components/NightSkyNav";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Night Sky Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950">
        {/* Animated Stars - Responsive count */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Shooting Stars - Reduced for better performance */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 2 + 3}s`,
              }}
            />
          ))}
        </div>

        {/* Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      </div>

      {/* Water Bottom - Responsive */}
      <div className="fixed bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-blue-950/80 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/30 rounded-full animate-ping"
              style={{
                left: `${15 + i * 14}%`,
                bottom: `${Math.random() * 20}px`,
                width: `${30 + i * 12}px`,
                height: `${30 + i * 12}px`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <NightSkyNav />
        <FuturisticHero />
        <GlassAbout />
        <FloatingProjects />
        <SkillsGalaxy />
        <TimelineExperience />
        <ContactPortal />
      </div>
    </main>
  );
}
