import Image from "next/image";

const Product = () => {
  return (
    <div>
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <h1 className="text-4xl text-center my-8">Our Popular Products</h1>
      </div>

      {/* Scrollable container for products */}
      <div className="flex items-center justify-start overflow-x-auto space-x-4 px-4">
        {/* Product 1 */}
        <div className="flex-shrink-0 w-[90vw] md:w-[630px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/Large.png"}
              alt="sofa pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Poplar suede sofa</p>
            <p>£980</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/right-hero.png"}
              alt="hero chair pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/chair.png"}
              alt="chair pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
