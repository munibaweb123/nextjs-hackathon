import Benefits from "./components/benefits";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Hero from "./components/hero";
import Product from "./components/product";


export default function Home() {
  return (
   <div className="max-w-[1440px] mx-auto font-satoshi">
    <Hero/>
    <Ceramics/>
    <div className="flex items-center justify-center">
            <button className="w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9]">View collection</button>

            </div>
    <Product/>
    <div className="flex items-center justify-center">
            <button className="w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9]">View collection</button>

            </div>
    <Benefits/>
    <Brand/>
   </div>
  );
}
