
import Benefits from "../components/benefits"
import Brand from "../components/brand"
import Ceramics from "../components/ceramics"
import Product2 from "../components/product2"

const product = () =>{
    return(
        <div className="max-w-[1440px] mx-auto">
 <Product2/>         
<Ceramics/>
<div className="flex items-center justify-center">
            <button className="md:w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9] m-2 w-full">View collection</button>

            </div>
<Benefits/>
<Brand/>
        </div>
    )
}

export default product