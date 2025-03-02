import Image from "next/image"
import Ceramics from "../components/ceramics"
import Category from "../components/category"
import Popular from "../components/popular"



const productListing =()=>{
    return(
        <div className="md:w-[1440px] mx-auto overflow-hidden">
            <div className="md:w-[1440px] h-[209px]">
                <Image src={"/productlist.png"} alt="product cover picture" height={1000} width={1000} className="w-full h-full"/>

            </div>
            <div className="md:w-[1440px] h-[64px] md:flex items-center justify-evenly">
           <div className="md:flex justify-evenly items-center">
        


        <select className=' border-none justify-end'>
          <option value="Product type">Product type</option>
          <option value="Crockery">Crockery</option>
          <option value="Furniture">Furniture</option>
          <option value="Homeware">Homeware</option>
          <option value="Plant pots">Plant pots</option>
          <option value="Chairs">Chairs</option>
        </select>

            
        <select className=' border-none justify-end'>
          <option value="Price">Price</option>
          <option value="price">£85</option>
          <option value="price">£50</option>
          <option value="price">£100</option>
          <option value="price">£80</option>
          <option value="price">£25</option>
        </select>

        <select className=' border-none justify-end'>
          <option value="brand">Brand</option>
          <option value="brand">brand1</option>
          
        </select>
           </div>

        <p>sorted by:</p>

        <select className=' border-none justify-end'>
          <option value="date">Date added</option>
          <option value="date">9/12/2024</option>
          
        </select>
            </div>

          <div className="md:w-[1280px] mx-auto">
          <Ceramics/>
          <Category/>
            
            <Popular/>

          </div>
            <div className="flex justify-center items-center">
            <button className="md:w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9] w-full">View collection</button>

            </div>
            

        </div>
    )
}
export default productListing