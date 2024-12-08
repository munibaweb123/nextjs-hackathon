import Image from "next/image"

const Brand = () =>{
    return(
        <div className="max-w-[1440px] mx-auto py-10">
        <div className="block md:flex justify-between items-center space-y-8 md:space-y-0 w-full">
          {/* Text Section */}
          <div className="w-full md:w-[720px] p-4 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique became the hotbed for the London interior design community.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[720px] md:h-[603px]">
            <Image
              src="/Image.png"
              alt="Studio Image"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
}
export default Brand