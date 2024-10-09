import ColorBox from "./ColorBox";
import colors from "../data/data";

export default function ColorBoxesContainer() {
 
  const boxes = [];

 
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    
    const box = <ColorBox key={i} initialColor={randomColor} />;
    
    boxes.push(box);
  }




  return (
    <div style={{display:"flex", flexWrap:"wrap", width:"250px"}}
     
    >
      {boxes} 
    </div>
  );
}