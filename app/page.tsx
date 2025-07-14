import SimpleNav from "@/components/SimpleNav";
import SimpleHero from "@/components/SimpleHero";
import SimpleAbout from "@/components/SimpleAbout";
import SimpleSkills from "@/components/SimpleSkills";
import SimpleProjects from "@/components/SimpleProjects";
import SimpleContact from "@/components/SimpleContact";
import SimpleFooter from "@/components/SimpleFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950">
      {/* Artistic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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
        
        {/* Nebula Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Navigation */}
      <SimpleNav />

      {/* Page Sections */}
      <div className="relative z-10">
        <SimpleHero />
        <SimpleAbout />
        <SimpleSkills />
        <SimpleProjects />
        <SimpleContact />
        <SimpleFooter />
      </div>
    </main>
  );
}
