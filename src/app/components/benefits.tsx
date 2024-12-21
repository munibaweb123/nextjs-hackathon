const Benefits = () =>{
    return(
        
              <div className="md:max-w-[1440px] w-full mx-auto h-[481px] flex flex-col items-center justify-center">
        <div className="md:w-[1273px] w-[390px] h-[292px] md:h-[364px] flex flex-col items-center justify-center space-y-10">
          <h2 className="md:text-4xl text-2xl w-[329px] md:w-[571px] text-center lg:text-5xl">Join the club and get the benefits</h2>
          <div className="md:w-[470px] w-[329px] h-[48px]">
            <p className="text-center w-[329px] md:w-[470px]">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores and more.
            </p>
          </div>
          <div className="flex justify-normal text-center">
            <input placeholder="your@email.com" className="bg-[#f9f9f9] p-2"/>
            <button className="w-[118px] h-[56px] bg-[#2A254B] text-white">Sign up</button>
          </div>
        </div>
      </div>
        
    )
}
export default Benefits