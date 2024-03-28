 import firstImage from "../assets/image/Beds.jpg"
 function Hero() {
    return (
        <>
            <div className="">
                <img src={firstImage} className="relative h-96 w-full  object-cover object-center shadow-xl shadow-pink-900/50"></img>
            </div>
            <div className="absolute top-[25%]  left-[50%] translate-x-[-50%] ">lalalalala </div> 
        </>      
       
    );
  }
  export default Hero;