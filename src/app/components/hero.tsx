import Image from "next/image"
import { FaCheck, FaCreditCard, FaRecycle, FaTruck } from "react-icons/fa"

const Hero = () => {
  return (
   
    <div className="max-w-[1280px] mx-auto">
<div className="md:w-[1280px] h-screen md:h-[584px] relative bg-[#2A254B]">
   <div className="p-10 md:w-[513px] h-[187px] relative">
   <h1 className="text-3xl text-white">
    The furniture brand for the future, with timeless designs
    </h1>
   <button className="bg-[#4E4D93] w-[170px] h-[56px] text-[#f9f9f9] md:bottom-0 absolute">View collection</button>
   </div>
   <div className="p-10 bottom-20 absolute md:w-[602px] text-white h-[81px]">
    <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>
   </div>
    <div className="hidden md:block w-[520px] h-[584px] absolute right-0 top-0">
    <Image src={"/right-hero.png"} alt="hero chair pic" height={1000} width={1000}/>
</div>
</div>

<div className="pt-10 pb-10">
    <h2 className="text-2xl text-center p-10">What makes our brand different</h2>

    <div className="block md:flex justify-between items-center">
        <div className="w-[270px] h-auto md:h-[124px]">
            <FaTruck size={20}/>
            <h2 className="text-xl">Next day as standard</h2>
            <p className="text-lg">Order before 3pm and get your order
            the next day as standard</p>
        </div>

        <div className="w-[270px] h-[124px]">
            <FaCheck size={20}/>
            <h2 className="text-xl">Made by true artisans</h2>
            <p className="text-lg">Handmade crafted goods made with
            real passion and craftmanship</p>
        </div>

        <div className="w-[270px] h-[124px]">
            <FaCreditCard size={20}/>
            <h2 className="text-xl">Unbeatable prices</h2>
            <p className="text-lg">For our materials and quality you won’t find better prices anywhere</p>
        </div>

        <div className="w-[270px] h-[124px]">
            <FaRecycle size={20}/>
            <h2 className="text-xl">Recycled packaging</h2>
            <p className="text-lg">We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Hero