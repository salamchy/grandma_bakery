import { useState } from "react";
import Profile from "../assets/Ellipse.png";
import Profile1 from "../assets/Ellipse.png";
import Profile2 from "../assets/Ellipse.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const testimonials = [
  {
    image: Profile,
    text: "This place is great. They have so many baked goods it will blow your mind. They have everything from large cakes to cupcakes to donuts to pastries to breads to cookies. The price is also fair.",
    name: "Aisha Pun",
    occupation: "Student",
  },
  {
    image: Profile1,
    text: "The best bakery in town! The quality of their products is unmatched, and the staff is incredibly friendly. Highly recommended!",
    name: "John Smith",
    occupation: "Food Blogger",
  },
  {
    image: Profile2,
    text: "Absolutely amazing baked goods! Their cupcakes are my favorite, and I can’t get enough of their fresh bread.",
    name: "Emily Rose",
    occupation: "Designer",
  },
];

const Testinomials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { image, text, name, occupation } = testimonials[currentIndex];

  return (
    <div className="flex items-center justify-center mt-32">
      <button onClick={handlePrev} className="focus:outline-none">
        <IoIosArrowBack className="cursor-pointer text-orange-200" size={60} />
      </button>
      <div className="max-w-[80%] flex items-center justify-center gap-16">
        <div>
          <img src={image} alt={name} className="rounded-full" />
        </div>
        <div className="max-w-[45%] text-xl montserrat text-[#050706]">
          <p>{text}</p>
          <p className="mt-2">
            <span className="text-xl font-bold montserrat">{name},</span> {occupation}
          </p>
        </div>
      </div>
      <button onClick={handleNext} className="focus:outline-none">
        <IoIosArrowForward className="cursor-pointer text-orange-200" size={60} />
      </button>
    </div>
  );
};
export default Testinomials