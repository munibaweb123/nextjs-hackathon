import Image from "next/image"

const About3 = () =>{
    return(
        <div className="md:w-[1440px] h-[836px] md:h-[598px] mx-auto flex items-center justify-evenly">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="w-[390px] md:w-[720px] h-[358px]  md:h-[603px]">
            <Image src={"/Image3.png"} alt="image" height={1000} width={1000} className="w-full h-full"/>
        </div>
    <div className="w-[390px] md:w-[720px] h-[358px] md:h-[603px] bg-[#f9f9f9] text-[#2A254B] relative">
            <div className="w-[342px] md:w-[536px] h-[264px] md:h-[225px] md:p-10 space-y-5">
            <h3 className="text-xl w-[274px] md:w-[461px] h-[68px] ">Our service isn&apos;t just personal, it&apos;s actually
            hyper personally exquisite</h3>
            <p className="text-sm md:text-md w-[342px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
                
               </p>
               <p className="text-sm md:text-md w-[342px]"> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            </div>
            <button className="w-[170px] h-[56px] bg-white absolute bottom-0 md:bottom-10 m-10 hover:border-[#4E4D93] border-2">Get in touch</button>
        </div>

       
    </div>
       
         
        </div>
    )
}
export default About3