import About1 from "../components/about1";
import About2 from "../components/about2";
import About3 from "../components/about3";
import Benefits from "../components/benefits";
import Brand from "../components/brand";

const about = ()=>{
    return(
        <div className="max-w-[1440px] mx-auto">
            <About1/>
            <About2/>
            <About3/>
            <Benefits/>
            <Brand/>
        </div>
    )
}
export default about;