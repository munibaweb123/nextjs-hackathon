import Image from "next/image"

const About2 = () =>{
    return(
        <div className="md:w-[1440px] h-[628px] md:h-[598px] mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[390px] md:w-full">
    <div className="w-[342px] md:w-[634px]  md:h-[598px] h-[478px] bg-[#2A254B] text-white relative">
            <div className="md:w-[495px] w-[278px] h-[99px] md:p-10 p-5">
            <h3 className="text-3xl">It started with a small idea</h3>
            <p className="text-sm w-[278px] md:w-[495px]">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
            </div>
            <button className="w-[278px] md:w-[170px] h-[56px] bg-[#4E4D93] text-white absolute m-5 bottom-10 md:m-10">View collection</button>
        </div>

        <div className="w-[342px] md:w-[634px] h-[259px] md:h-[598px]">
            <Image src={"/image2.png"} alt="image" height={1000} width={1000} className="w-full h-full"/>
        </div>
    </div>
       
         
        </div>
    )
}
export default About2