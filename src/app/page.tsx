import Link from "next/link";
import Benefits from "./components/benefits";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Hero from "./components/hero";
import Popular from "./components/popular";



export default function Home() {
  return (
   <div className="md:max-w-[1440px] max-w-screen overflow-hidden mx-auto font-satoshi">
    <Hero/>
    <Ceramics/>
    <div className="flex items-center justify-center">
            <button className="w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9] hover:bg-[#4E4D93] hover:text-white m-10">
                <Link href={"/productlisting"}>View collection
                </Link>
            </button>

            </div>
    <Popular/>
    <div className="flex items-center justify-center">
            <button className="w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9] hover:bg-[#4E4D93] hover:text-white m-10">
                <Link href={"/productlisting"}>View collection
                </Link>
            </button>

            </div>
    <Benefits/>
    <Brand/>
   </div>
  );
}
