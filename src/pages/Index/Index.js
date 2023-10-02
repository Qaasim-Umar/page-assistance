import React from "react";
import "./Index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Icon from "../../components/Icon/Icon";
import { useState } from "react";
import gif from "../../components/Header/welcome.gif";

const Index = () => {

  const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });

  const handleHover = (event) => {
    // Get the position of the hovered element
    const rect = event.target.getBoundingClientRect();

    // Adjust the position to be close to the hovered element
    const offsetX = 0; // You can adjust this value based on your design
    const offsetY = -200; // You can adjust this value based on your design

    setGifPosition({
      x: rect.left + window.scrollX - offsetX,
      y: rect.top + window.scrollY - offsetY,
    });
  };

  return (
    <div>
      <Header />
<div className="container"> 
<div className="list">
      <div    className="hover-element link one"
        onMouseEnter={handleHover} >
      Number 1 box
      </div>


      <div   className="hover-element link two"
        onMouseEnter={handleHover}>
        Number 2 box
      </div>


      <div   className="hover-element link three"
        onMouseEnter={handleHover}>
        Number 3 box
      </div>

      <div className=" hover-element link four"
      onMouseEnter={handleHover}>
        Number 4 box
      </div>

      <div   className="hover-gif"
        style={{ left: gifPosition.x, bottom: gifPosition.y }}>
       <img src={gif} className="img" alt="GIF" />
      </div>

    

</div>
</div>
      <Icon />
      <Footer />
    </div>
  );
};

export default Index;
