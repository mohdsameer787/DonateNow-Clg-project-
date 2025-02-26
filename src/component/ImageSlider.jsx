import  { useState, useEffect } from "react";
import arrow1 from '/src/assets/arrow1.svg'
import arrow2 from '/src/assets/arrow2.svg'
const ImageSlider = () => {
  // List of images
  const images = [
    "/src/assets/img1.png",
    "/src/assets/img2.jpg",
    "/src/assets/img3.jpg",
    "/src/assets/img4.jpg",
  ]; 

  // State for current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  return (
    <div
      className="slider-container rounded-xl w-[90vw]"
      style={{ maxHeight:"400px" , margin: "auto", overflow: "hidden", position: "relative" }}
    >
      <div
        className="slider"
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`, // Move the slider based on current index
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        style={{ ...buttonStyle, left: "10px" }} // Position the Prev button on the left
      >
      <img  className="h-9 text-white bg-[#d18c0c] rounded-full "  src= {arrow1} alt="1" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{ ...buttonStyle, right: "10px" }} // Position the Next button on the right
      >
      <img className="h-9 text-white bg-[#d18c0c] rounded-full " src= {arrow2} alt="1" />
      </button>
     
    </div>
  );
};

// Button styles for prev and next buttons
const buttonStyle = {
  position: "absolute",
  top: "50%",
 
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  fontSize: "18px",
  zIndex: 1,
  transform: "translateY(-50%)",
};

export default ImageSlider;

