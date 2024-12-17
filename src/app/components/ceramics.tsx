import Image from "next/image";


const Ceramics = () => {
  return (
    <div className="max-w-[1440px] h-[761px]">
      {/* New Ceramics Section */}
      <div>
        <div className="w-[1280px] mx-auto">
          <h1 className="text-4xl">New Ceramics</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[1280px] w-screen mx-auto p-2 m-2">
          <div className="md:w-[305px] w-full h-auto md:h-[462px]">
            <div className="md:w-[305px] w-full h-auto md:h-[375px]">
              <Image
                src={"/right-hero.png"}
                alt="hero chair pic"
                height={1000}
                width={1000}
                className="h-full"
              />
            </div>
            <div className="w-[154px] h-[63px]">
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
          </div>
          <div className="md:w-[305px] w-full h-auto md:h-[462px]">
            <div className="md:w-[305px] w-full h-auto md:h-[375px]">
              <Image
                src={"/ceramic2.png"}
                alt="hero chair pic"
                height={1000}
                width={1000}
                className="h-full"
              />
            </div>
            <div className="w-[154px] h-[63px]">
              <p>Rustic Vase Set</p>
              <p>£155</p>
            </div>
          </div>
          <div className="md:w-[305px] w-full h-auto md:h-[462px]">
            <div className="md:w-[305px] w-full h-auto md:h-[375px]">
              <Image
                src={"/ceramic1.png"}
                alt="hero chair pic"
                height={1000}
                width={1000}
                className="h-full"
              />
            </div>
            <div className="w-[154px] h-[63px]">
              <p>The Silky Vase</p>
              <p>£125</p>
            </div>
          </div>
          <div className="md:w-[305px] w-full h-auto md:h-[462px]">
            <div className="md:w-[305px] w-full h-auto md:h-[375px]">
              <Image
                src={"/ceramic3.png"}
                alt="hero chair pic"
                height={1000}
                width={1000}
                className="h-full"
              />
            </div>
            <div className="w-[154px] h-[63px]">
              <p>The Lucy Lamp</p>
              <p>£399</p>
            </div>
          </div>
        </div>
      </div>

   
    
    </div>
  );
};

export default Ceramics
