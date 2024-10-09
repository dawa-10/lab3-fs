import { useState } from "react";
import colors from "../data/data";

export default function ColorBox({ initialColor }) {
  const [color, setColor] = useState(initialColor);

  
  

  return (
    <div
      onClick={()=>{
       
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }
}
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
}
