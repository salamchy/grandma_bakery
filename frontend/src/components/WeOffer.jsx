import Shape1 from "../assets/Shape1.png";
import Shape2 from "../assets/Shape2.png";
import Shape3 from "../assets/Shape3.png";
import Shape4 from "../assets/Shape4.png";
import Shape5 from "../assets/Shape5.png";
import Shape6 from "../assets/Shape6.png";
import Cards from "./Cards";

const WeOffer = () => {
  return (
    <div className="relative flex items-center justify-center pb-16">
      <div className="absolute left-72 bottom-[27rem]">
        <img src={Shape1} alt="" />
      </div>
      <div className="absolute top-32 left-32">
        <img src={Shape2} alt="" />
      </div>
      <div className="absolute top-[27rem] left-32">
        <img src={Shape3} alt="" />
      </div>
      <div className="absolute right-[21rem] bottom-[27rem]">
        <img src={Shape4} alt="" />
      </div>
      <div className="absolute right-[12rem] bottom-[21rem]">
        <img src={Shape5} alt="" />
      </div>
      <div className="absolute top-[27rem] right-32">
        <img src={Shape6} alt="" />
      </div>


      {/* Main Title Section */}
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl font-bold montserrat relative">
          <span className="relative inline-block">
            What
            <span className="absolute font-bold md:top-12 lg:left-0 md:left-32  lg:w-12 lg:h-[5px]  bg-line2"></span>
          </span>
          &nbsp;we offer
        </h1>
        <div className="flex items-center justify-center">
          <p className="text-lg montserrat pt-5 text-center max-w-[60%]">
            Introducing you a wide variety of bakery items with unique taste and the creamiest of cakes in the city.
          </p>
        </div>

        {/* cards */}
        <Cards />
      </div>
    </div>
  )
}
export default WeOffer