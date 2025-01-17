import Img1 from "../assets/rectangle4.png";
import GloveImg from "../assets/Gloves.svg";
import Button from "./Button";

const SmallAbout = () => {
  return (
    <div className="h-[30rem] w-full border mt-10 flex relative">
      {/* image */}
      <div className="w-[45%] flex items-center justify-center">
        <img className="w-full h-[30rem]" src={Img1} alt="" />
      </div>

      {/* text */}
      <div className="relative w-[55%] bg-aboutClr h-[30rem] flex flex-col items-start pl-40 justify-center">
        <h2 className="text-4xl font-bold mb-6 bg-transparent montserrat">About Grandma's Bakery</h2>
        <p className="max-w-[60%] bg-transparent montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis maxime totam, id, corporis tempora eius officiis quo architecto ducimus error ratione dolor asperiores sunt accusamus culpa et.</p>

        {/* button */}
        <Button text="Read More" />
      </div>
    </div>
  )
}
export default SmallAbout;
