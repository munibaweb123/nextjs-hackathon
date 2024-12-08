import Image from "next/image"

const Product = () =>{
    return(
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
    )
}
export default Product