import Ceramics from "./components/ceramics";
import Hero from "./components/hero";


export default function Home() {
  return (
   <div className="max-w-[1440px] mx-auto font-satoshi">
    <Hero/>
    <Ceramics/>
    
   </div>
  );
}
