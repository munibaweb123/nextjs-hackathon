import Image from "next/image";

const Cart = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] px-4 md:px-8">
      <div className="max-w-[1064px] mx-auto py-6 relative">
        <h3 className="text-2xl md:text-4xl mb-4">Your shopping cart</h3>
        
        {/* Scrollable Table Container */}
        <div className="w-full overflow-auto md:overflow-visible">
          <table className="w-full table-auto bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="border-b-2 border-[#D9D9D9]">
                <th className="px-4 py-2 text-left font-normal">Product</th>
                <th className="px-4 py-2 text-left font-normal">Quantity</th>
                <th className="px-4 py-2 text-left font-normal">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* First Product */}
              <tr className="border-t">
                <td className="px-4 py-4 text-gray-800">
                  <div className="flex items-center">
                    <div className="w-[109px] h-[134px] flex-shrink-0">
                      <Image
                        src="/product1.png"
                        alt="product vase"
                        height={500}
                        width={500}
                        className="object-cover"
                      />
                    </div>
                    <div className="pl-4">
                      <h3 className="text-lg md:text-xl">Graystone vase</h3>
                      <p className="text-sm md:text-base">
                        A timeless ceramic vase with a tri color grey glaze.
                      </p>
                      <p className="font-semibold">£85</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">1</td>
                <td className="px-4 py-2 text-center">£85</td>
              </tr>

              {/* Second Product */}
              <tr className="border-t">
                <td className="px-4 py-4 text-gray-800">
                  <div className="flex items-center">
                    <div className="w-[109px] h-[134px] flex-shrink-0">
                      <Image
                        src="/product2.png"
                        alt="product vase"
                        height={500}
                        width={500}
                        className="object-cover"
                      />
                    </div>
                    <div className="pl-4">
                      <h3 className="text-lg md:text-xl">Basic white vase</h3>
                      <p className="text-sm md:text-base">
                        Beautiful and simple this is one for the classics.
                      </p>
                      <p className="font-semibold">£125</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">1</td>
                <td className="px-4 py-2 text-center">£125</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subtotal Section */}
        <div className="w-full md:w-auto mt-6 md:mt-4 md:absolute left-0">
          <div className="text-lg text-center md:text-right">
            Subtotal: <span className="font-semibold">£210</span>
          </div>
          <p className="text-sm text-center md:text-right mt-1">
            Taxes and shipping are calculated at checkout
          </p>
        </div>

        {/* Checkout Button */}
        <div className="w-full flex justify-center md:justify-end mt-6">
          <button className="w-full md:w-[172px] h-[56px] bg-[#2A254B] text-white">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
