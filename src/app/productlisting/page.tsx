import Image from "next/image"
import Ceramics from "../components/ceramics"

const productListing =()=>{
    return(
        <div className="md:w-[1440px] mx-auto">
            <div className="md:w-[1440px] h-[209px]">
                <Image src={"/productlist.png"} alt="product cover picture" height={1000} width={1000} className="w-full h-full"/>

            </div>
            <div className="md:w-[1440px] h-[64px] flex items-center justify-evenly">
            <select className=' border-none justify-end'>
          <option value="Category">Category</option>
          <option value="Crockery">Crockery</option>
          <option value="Furniture">Furniture</option>
          <option value="Homeware">Homeware</option>
          <option value="Plant pots">Plant pots</option>
          <option value="Chairs">Chairs</option>
        </select>


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

        <p>sorted by:</p>

        <select className=' border-none justify-end'>
          <option value="date">Date added</option>
          <option value="date">9/12/2024</option>
          
        </select>
            </div>

            <Ceramics/>

        </div>
    )
}
export default productListing