import Image from "next/image";

const About2 = () => {
  return (
    <div className="mx-auto md:w-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 md:px-0">
        {/* Left Section (Text + Button) */}
        <div className="w-full bg-[#2A254B] text-white relative rounded-md md:h-[598px] h-[478px]">
          <div className="md:w-[495px] w-full md:h-auto h-[99px] md:p-10 p-5">
            <h3 className="text-3xl md:text-4xl font-semibold">It started with a small idea</h3>
            <p className="text-sm md:text-base">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014.
            </p>
          </div>
          <button className="w-[278px] md:w-[170px] h-[56px] bg-[#4E4D93] text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-auto md:transform-none md:right-10 md:w-[170px]">
            View collection
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:h-[598px] h-[259px]">
          <Image
            src={"/image2.png"}
            alt="image"
            height={1000}
            width={1000}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About2;
