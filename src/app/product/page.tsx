
import Benefits from "../components/benefits"
import Brand from "../components/brand"
import Ceramics from "../components/ceramics"
import Product2 from "../components/product2"

const product = () =>{
    return(
        <div>
 <Product2/>         
<Ceramics/>
<div className="flex items-center justify-center">
            <button className="w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9]">View collection</button>

            </div>
<Benefits/>
<Brand/>
        </div>
    )
}

export default product