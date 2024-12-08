import Image from "next/image"

const Product2 = () =>{
    return(
        <div className="max-w-[1440px]  md:h-[759px] mx-auto grid grid-cols-1 md:grid-cols-2 h-[1055px]">
            <div className="w-[390px] md:w-[721px] h-[380px] md:h-[759px]">
                <Image src={"/chair2.png"} alt="chair" width={1000} height={1000}/>
            </div>
            <div className="w-[390px] md:w-[721px] h-[380px] md:h-[759px] flex-col justify-center items-center">
               <div className="w-[602px] h-[657px] md:p-10 p-2 space-y-14 md:space-y-20">
                <div className="w-[281px] h-[89px]">
                <h2 className="text-4xl">The Dandy Chair</h2>
                <p>£250</p>
                </div>
                
                <div className="space-y-2 w-[342px] h-[193px]">
                <h3>description</h3>
                    <p>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                    <ul className="list-disc pl-5 space-y-2">
                            <li>Premium material</li>
                            <li>Handmade upholstery</li>
                            <li>Quality timeless classic</li>
                        </ul>
                </div>
                <div className="w-[241px] h-[99px]">
                    <h3>Dimensions</h3>
                    <table className="border-collapse border border-gray-300">
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
                <div className="flex justify-between items-center">
                  <div className="w-[209px] h-[46px] flex justify-between items-center">
                  <p>Amount:</p><div className="w-[122px] h-[46px] bg-[#f9f9f9] flex justify-end items-center"><p>1</p></div>
                  </div>
                    <button className="w-[143px] h-[56px] bg-[#2A254B] text-white">Add to cart</button>
                </div>

               </div>
            </div>
        </div>
    )
}
export default Product2