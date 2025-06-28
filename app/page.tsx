import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {FloatingNav} from "../components/ui/FloatingNav";
import RecentProject from "../components/RecentProject";
import { navItems } from "../data";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import { TechStack } from "../components/TechStack";



export default function Home() {
  return (
    
    <main className="relative  bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
       <FloatingNav navItems={navItems}/>
       <Hero/>
       <Grid/>
       <RecentProject/>
       <TechStack/>
       <Experience/>
       <Footer/>
      </div>
    </main>
   
  );
}
