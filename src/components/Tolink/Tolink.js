import React from "react";
import "./Tolink.css";
import '../../pages/Index/Index.css'
import gif from '../../components/Header/welcome.gif'
import { useState } from 'react';

const Tolink = ({name,link, id}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      {" "}
      <a href={link} id={id}   className="tooltip-container link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}> {name} 
      
       {isHovered && (
        <div className="tooltip">
          <img src={gif} className='img' alt="GIF" />
        </div>
      )} 
      
      </a>{" "}
    </div>
  );
};

export default Tolink;
