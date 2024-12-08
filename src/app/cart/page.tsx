import Image from "next/image"


  
const cart = () =>{
    return(
        <div className="md:w-[1440px] mx-auto w-[390px] h-[749px] bg-[#f9f9f9]">
          <div className="md:w-[1064px] w-[390px] h-[729px] mx-auto relative">
          <h3 className="text-4xl">Your shopping cart</h3>
            <table className="md:w-[1064px] mx-auto table-auto bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className=" border-b-2 border-[#D9D9D9]">
            <th className="px-4 py-2 text-left font-normal">Product</th>
            <th className="px-4 py-2 text-left font-normal">Quantity</th>
            <th className="px-4 py-2 text-left font-normal">Total</th>
          </tr>
        </thead>
        <tbody>
          
            <tr  className="border-t">
              <td className="px-4 py-2 text-gray-800">
                <div className="w-[309px] h-[134px] flex items-center justify-normal">
                    <div className="w-[109px] h-[134px]">
                        <Image src={"/product1.png"} alt="product vase" height={500} width={500}/>
                    </div>
                    <div className="w-[179px] h-[110px] pl-4">
                        <h3 className="text-xl">Graystone vase</h3>
                        <p>A timeless ceramic vase with 
                        a tri color grey glaze.</p>
                        <p>£85</p>
                    </div>
                </div>
              </td>
              <td className="px-4 py-2 text-gray-800">1</td>
              <td className="px-4 py-2 text-gray-800">£85</td>
            </tr>
            <tr  className="border-t">
              <td className="px-4 py-2 text-gray-800">
                <div className="w-[309px] h-[134px] flex items-center justify-normal">
                    <div className="w-[109px] h-[134px]">
                        <Image src={"/product2.png"} alt="product vase" height={500} width={500}/>
                    </div>
                    <div className="w-[179px] h-[110px] pl-4">
                        <h3 className="text-xl">Basic white vase</h3>
                        <p>Beautiful and simple this is
                        one for the classics</p>
                        <p>£85</p>
                    </div>
                </div>
              </td>
              <td className="px-4 py-2 text-gray-800">1</td>
              <td className="px-4 py-2 text-gray-800">£125</td>
            </tr>
          
        
        </tbody>
      </table>
      <div className="w-[282px] h-[67px] absolute md:right-0">
                    Subtotal <span className="font-semibold">£210</span>
                <p>Taxes and shipping are calculated at checkout</p>
                
                    </div>
      <button className="w-[172px] h-[56px] bg-[#2A254B] text-white right-0 absolute bottom-0">Go to checkout</button>
          </div>

        </div>
    )
}
export default cart