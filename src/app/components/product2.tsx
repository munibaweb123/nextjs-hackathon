import Image from "next/image";

const Product2 = () => {
  return (
    <div className="max-w-full md:max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 h-auto md:h-[759px]">
      {/* Image Section */}
      <div className="w-full md:w-[721px] h-[380px] md:h-[759px]">
        <Image src={"/chair2.png"} alt="chair" width={1000} height={1000} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[721px] flex flex-col justify-center items-center p-4 md:p-10 space-y-8 md:space-y-12">
        <div className="w-full max-w-[602px] space-y-10">
          {/* Title and Price */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl">The Dandy Chair</h2>
            <p className="text-lg md:text-xl">£250</p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl">Description</h3>
            <p className="text-sm md:text-base">
              A timeless design, with premium materials features as one of our most popular and iconic pieces. The Dandy chair
              is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions */}
          <div className="w-full">
            <h3 className="text-lg md:text-xl">Dimensions</h3>
            <table className="border-collapse border border-gray-300 w-full mt-2">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Height</th>
                  <th className="px-4 py-2 border">Width</th>
                  <th className="px-4 py-2 border">Depth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">110 cm</td>
                  <td className="px-4 py-2 border">75 cm</td>
                  <td className="px-4 py-2 border">50 cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Amount and Add to Cart */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-[209px] h-[46px] flex justify-between items-center">
              <p>Amount:</p>
              <div className="w-[122px] h-[46px] bg-[#f9f9f9] flex justify-center items-center">
                <p>1</p>
              </div>
            </div>
            <button className="w-full md:w-[143px] h-[56px] bg-[#2A254B] text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
