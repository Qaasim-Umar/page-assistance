import React from "react";
import "./Index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Icon from "../../components/Icon/Icon";
import { useState } from "react";
import gif from "../../components/Header/welcome.gif";


const Index = () => {

  const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleHover = (event, boxNumber) => {
    // Get the position of the hovered element
    const rect = event.target.getBoundingClientRect();

    // Adjust the position to be close to the hovered element
    const offsetX = 10; // You can adjust this value based on your design
    const offsetY = -190; // You can adjust this value based on your design

    setGifPosition({
      x: rect.left + window.scrollX - offsetX,
      y: rect.top + window.scrollY - offsetY,
    });

    setHoveredBox(boxNumber);
  };

  return (
    <div>
      <Header />

<div className="container"> 
<div className="list">
      <div  className="hover-element link"
        onMouseEnter={(event) => handleHover(event, 1)}
      >
      Number 1 box
      </div>


      <div    className="hover-element link"
        onMouseEnter={(event) => handleHover(event, 2)}
      >
        Number 2 box
      </div>


      <div    className="hover-element link"
        onMouseEnter={(event) => handleHover(event, 3)}
      >
        Number 3 box
      </div>

      <div  className="hover-element link"
        onMouseEnter={(event) => handleHover(event, 4)}
      >
        Number 4 box
      </div>
  {/* Display the GIF and text */}
  <div className="hover-container">
        <div
          className="hover-gif"
          style={{ left: gifPosition.x, bottom: gifPosition.y }}
        >
          <img src={gif} className='img' alt="GIF" />
        </div>
        {hoveredBox && (
          <div
            className="hover-text"
            style={{
              left: gifPosition.x + 100 , // Adjust the distance from the GIF
              top: gifPosition.y + -190,
            }}
          >
            Hovered Box: {hoveredBox}
          </div>
        )}
      </div>

    

</div>
</div>
      <Icon />
      <Footer />
    </div>
  );
};

export default Index;
