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
    <Product/>
    <Benefits/>
    <Brand/>
   </div>
  );
}
