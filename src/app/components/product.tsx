import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel';
import { Card} from "../components/ui/card";

const Product = () => {
  return (
    <div>
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <h1 className="text-4xl text-center my-8">Our Popular Products</h1>
      </div>

      <Carousel className="m-2">
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 ">
    <Card className="flex-shrink-0 w-[90vw] md:w-[630px] h-[462px]">
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
        </Card></CarouselItem>
    <CarouselItem className="md:basis-1/4 ">
    <Card className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
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
        </Card>
    </CarouselItem>
    <CarouselItem className="md:basis-1/4">
    <Card className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
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
        </Card>
    </CarouselItem>
    <CarouselItem className="md:basis-1/4">
    <Card className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/ceramic1.png"}
              alt="chair pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Vase</p>
            <p>£25</p>
          </div>
        </Card>
    </CarouselItem>
    <CarouselItem className="md:basis-1/4">
    <Card className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/ceramic2.png"}
              alt="chair pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Vase</p>
            <p>£25</p>
          </div>
        </Card>
    </CarouselItem>
    <CarouselItem className="md:basis-1/4">
    <Card className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/ceramic3.png"}
              alt="chair pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Lamp</p>
            <p>£50</p>
          </div>
        </Card>
    </CarouselItem>
    <CarouselItem className="md:basis-1/4">
    <Card className="flex-shrink-0 w-[90vw] md:w-[305px] h-[462px]">
          <div className="w-full h-[375px]">
            <Image
              src={"/ceramic4.png"}
              alt="chair pic"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[154px] h-[63px] mt-4">
            <p>The Lamp</p>
            <p>£50</p>
          </div>
        </Card>
    </CarouselItem>
    

  </CarouselContent>
</Carousel>

    
    </div>
  );
};

export default Product;
