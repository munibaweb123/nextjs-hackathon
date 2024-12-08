import Image from "next/image";

const Ceramics = () => {
  return (
    <div className="max-w-[1440px] h-[761px]">
      {/* New Ceramics Section */}
      <div>
        <div className="w-[1280px] mx-auto">
          <h1 className="text-4xl">New Ceramics</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[1280px] w-screen mx-auto">
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

      {/* Product Section */}
      <div>
        <div className="w-[1280px] mx-auto">
          <h1 className="text-4xl">Our popular products</h1>
        </div>
        <div className="flex items-center justify-between w-[1280px] h-[573px] mx-auto">
          <div className="w-[630px] h-[462px]">
            <div className="w-[630px] h-[375px]">
              <Image
                src={"/large.png"}
                alt="hero chair pic"
                height={1000}
                width={1000}
                className="h-full"
              />
            </div>
            <div className="w-[154px] h-[63px]">
              <p>The Poplar suede sofa</p>
              <p>£980</p>
            </div>
          </div>
          <div className="w-[305px] h-[462px]">
            <div className="w-[305px] h-[375px]">
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
          <div className="w-[305px] h-[462px]">
            <div className="w-[305px] h-[375px]">
              <Image
                src={"/chair.png"}
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
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-[1440px] mx-auto h-[481px]">
        <div className="md:w-[1273px] w-[390px] h-[292px] md:h-[364px] flex flex-col items-center justify-center">
          <h2 className="text-4xl">Join the club and get the benefits</h2>
          <div className="w-[470px] h-[48px]">
            <p className="text-center">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores and more.
            </p>
          </div>
        </div>
      </div>

      {/* Last Section */}
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
              src="/image.png"
              alt="Studio Image"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceramics
