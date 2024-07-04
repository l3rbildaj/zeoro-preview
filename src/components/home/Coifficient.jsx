// import React, { useEffect } from 'react';

// const Coifficient = () => {
//     useEffect(() => {
//         const canvas = document.getElementById('graphCanvas');
//         const ctx = canvas.getContext('2d');

//         const gridSize = 7;
//         const diamondSize = 40;
//         const startX = 100;
//         const startY = 50;
//         const offsetX = 40; // Horizontal distance between centers of diamonds
//         const offsetY = 40; // Vertical distance between centers of diamonds
//         const gap = 20; // Gap between diamonds

//         const specialDiamonds = [
//             { x: 0, y: 4 },
//             { x: 1, y: 4 },
//             { x: 2, y: 5 },
//             { x: 3, y: 6 },
//             { x: 4, y: 6 },
//             { x: 5, y: 6 },
//             { x: 6, y: 6 }
//         ];

//         const specialDiamonds2 = [
//             { x: 2, y: 5 },
//             { x: 2, y: 2 },
//             { x: 4, y: 4 },
//             { x: 5, y: 5 }
//         ];

//         const diamondPositions = [];

//         const drawDiamond = (ctx, x, y, size, isSpecial = false, borderColor = 'black', doubleBorder = false) => {
//             ctx.beginPath();
//             ctx.moveTo(x, y - size / 2);
//             ctx.lineTo(x + size / 2, y);
//             ctx.lineTo(x, y + size / 2);
//             ctx.lineTo(x - size / 2, y);
//             ctx.closePath();
//             ctx.fillStyle = isSpecial ? 'white' : 'gray';
//             ctx.fill();
//             if (doubleBorder) {
//                 ctx.strokeStyle = 'white';
//                 ctx.lineWidth = 4;
//                 ctx.stroke();
//                 ctx.strokeStyle = borderColor;
//                 ctx.lineWidth = 2;
//                 ctx.stroke();
//             } else if (borderColor) {
//                 ctx.strokeStyle = borderColor;
//                 ctx.lineWidth = 2;
//                 ctx.stroke();
//             }
//         };

//         const drawGrid = () => {
//             for (let i = 0; i < gridSize; i++) {
//                 for (let j = 0; j < gridSize; j++) {
//                     const x = startX + j * (offsetX + gap);
//                     const y = startY + i * (offsetY + gap);
//                     const isSpecial = specialDiamonds.some(d => d.x === j && d.y === i);
//                     const isSpecial2 = specialDiamonds2.some(d => d.x === j && d.y === i);
//                     diamondPositions.push({ x, y, size: diamondSize, isSpecial, isSpecial2 });
//                     drawDiamond(ctx, x, y, diamondSize, isSpecial, isSpecial ? 'black' : 'black', isSpecial2);
//                 }
//             }
//         };

//         const drawConnections = () => {
//             const specialDiamondPositions = diamondPositions.filter(pos => pos.isSpecial);
//             if (specialDiamondPositions.length > 0) {
//                 ctx.strokeStyle = 'white';
//                 ctx.lineWidth = 2;
//                 ctx.beginPath();
//                 ctx.moveTo(specialDiamondPositions[0].x, specialDiamondPositions[0].y);
//                 for (let i = 1; i < specialDiamondPositions.length; i++) {
//                     ctx.lineTo(specialDiamondPositions[i].x, specialDiamondPositions[i].y);
//                 }
//                 ctx.stroke();
//             }
//         };

//         const drawAxes = () => {
//             ctx.strokeStyle = 'white';
//             ctx.lineWidth = 2;
        
//             // Function to draw a diamond
//             const drawDiamond = (x, y, size) => {
//                 ctx.beginPath();
//                 ctx.moveTo(x, y - size); // Top
//                 ctx.lineTo(x + size, y); // Right
//                 ctx.lineTo(x, y + size); // Bottom
//                 ctx.lineTo(x - size, y); // Left
//                 ctx.closePath();
//                 ctx.fill();
//             };
        
//             // Function to draw an arrow
//             const drawArrow = (x, y, angle, size) => {
//                 ctx.beginPath();
//                 ctx.moveTo(x, y);
//                 ctx.lineTo(x - size * Math.cos(angle - Math.PI / 6), y - size * Math.sin(angle - Math.PI / 6));
//                 ctx.moveTo(x, y);
//                 ctx.lineTo(x - size * Math.cos(angle + Math.PI / 6), y - size * Math.sin(angle + Math.PI / 6));
//                 ctx.stroke();
//             };
        
//             // Define the start and end points for the Y axis
//             const yStartX = startX - 50;
//             const yStartY = startY - 19;
//             const yEndX = startX - 50;
//             const yEndY = startY + 7.2 * (offsetY + gap);
        
//             // Draw Y axis
//             ctx.beginPath();
//             ctx.moveTo(yStartX, yStartY);
//             ctx.lineTo(yEndX, yEndY);
//             ctx.stroke();
//             drawArrow(yStartX, yStartY, -Math.PI / 2, 10); // Draw arrow at the start
//             drawDiamond(yEndX, yEndY, 5); // Draw diamond at the end
        
//             // Define the start and end points for the X axis
//             const xStartX = startX - 75;
//             const xStartY = startY + gridSize * (37 + gap) + 6.5;
//             const xEndX = startX + gridSize * (35 + gap);
//             const xEndY = startY + 6.5 * (offsetY + gap) + 15;
        
//             // Draw X axis
//             ctx.beginPath();
//             ctx.moveTo(xStartX, xStartY);
//             ctx.lineTo(xEndX, xEndY);
//             ctx.stroke();
//             drawDiamond(xStartX, xStartY, 5); // Draw diamond at the start
//             drawArrow(xEndX, xEndY, 0, 10); // Draw arrow at the end
//         };

        

//         const drawText = () => {
//             ctx.save();
//             ctx.translate(20, canvas.height / 2.2);
//             ctx.rotate(-Math.PI / 2);
//             ctx.textAlign = "center";
//             ctx.fillStyle = "white";
//             ctx.font = "14px sans-serif";
//             ctx.fillText("BRAND AWARENESS", 0, 0);
//             ctx.restore();

//             ctx.textAlign = "center";
//             ctx.fillStyle = "white";
//             ctx.font = "14px sans-serif";
//             ctx.fillText("BRAND SERVICE DEPTH", canvas.width / 2.2, canvas.height - 47);
//         };

//         const initCanvas = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             drawGrid();
//             drawConnections();
//             drawAxes();
//             // drawText();
//         };

//         initCanvas();

//         // Add click event listener
//         canvas.addEventListener('click', (event) => {
//             const rect = canvas.getBoundingClientRect();
//             const x = event.clientX - rect.left;
//             const y = event.clientY - rect.top;

//             diamondPositions.forEach((diamond) => {
//                 if (isPointInDiamond(x, y, diamond)) {
//                     alert(`Diamond clicked at (${diamond.x}, ${diamond.y})`);
//                 }
//             });
//         });

//         const isPointInDiamond = (px, py, diamond) => {
//             const { x, y, size } = diamond;
//             return Math.abs(px - x) <= size / 2 && Math.abs(py - y) <= size / 2;
//         };

//     }, []);

//     return (
//         <canvas id="graphCanvas" width="500" height="500"></canvas>
//     );
// };

// export default Coifficient;




import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const rectangles = [
  { x: 7.10938, y: 366.467, fill: '#505050' },
  { x: 7.10938, y: 309.878, fill: '#505050' },
  { x: 7.10938, y: 253.29, fill: 'white' },
  { x: 7.10938, y: 196.702, fill: '#505050' },
  { x: 7.10938, y: 140.114, fill: '#505050' },
  { x: 7.10938, y: 83.5254, fill: '#505050' },
  { x: 7.10938, y: 26.9375, fill: '#505050' },
  { x: 63.6973, y: 366.467, fill: '#505050' },
  { x: 63.6973, y: 309.878, fill: '#505050' },
  { x: 63.6973, y: 253.29, fill: 'white' },
  { x: 63.6973, y: 196.702, fill: '#505050' },
  { x: 63.6973, y: 140.114, fill: '#505050' },
  { x: 63.6973, y: 83.5254, fill: '#505050' },
  { x: 63.6973, y: 26.9375, fill: '#505050' },
  { x: 120.285, y: 366.467, fill: '#505050' },
  { x: 120.285, y: 309.878, fill: 'white' },
  { x: 120.285, y: 253.29, fill: '#505050' },
  { x: 120.285, y: 196.702, fill: '#505050' },
  { x: 120.285, y: 140.114, fill: '#505050' },
  { x: 120.285, y: 83.5254, fill: '#505050' },
  { x: 120.285, y: 26.9375, fill: '#505050' },
  { x: 176.873, y: 366.467, fill: 'white' },
  { x: 176.874, y: 309.878, fill: '#505050' },
  { x: 176.874, y: 253.29, fill: '#505050' },
  { x: 176.874, y: 196.702, fill: '#505050' },
  { x: 176.874, y: 140.114, fill: '#505050' },
  { x: 176.873, y: 83.5254, fill: '#505050' },
  { x: 176.874, y: 26.9375, fill: '#505050' },
  { x: 233.461, y: 366.467, fill: 'white' },
  { x: 233.461, y: 309.878, fill: '#505050' },
  { x: 233.461, y: 253.29, fill: '#505050' },
  { x: 233.461, y: 196.702, fill: '#505050' },
  { x: 233.461, y: 140.114, fill: '#505050' },
  { x: 233.461, y: 83.5254, fill: '#505050' },
  { x: 233.461, y: 26.9375, fill: '#505050' },
  { x: 290.049, y: 366.467, fill: 'white' },
  { x: 290.049, y: 309.878, fill: '#505050' },
  { x: 290.049, y: 253.29, fill: '#505050' },
  { x: 290.049, y: 196.702, fill: '#505050' },
  { x: 290.049, y: 140.114, fill: '#505050' },
  { x: 290.049, y: 83.5254, fill: '#505050' },
  { x: 290.049, y: 26.9375, fill: '#505050' },
  { x: 346.638, y: 366.467, fill: 'white' },
  { x: 346.638, y: 309.878, fill: '#505050' },
  { x: 346.638, y: 253.29, fill: '#505050' },
  { x: 346.638, y: 196.702, fill: '#505050' },
  { x: 346.638, y: 140.114, fill: '#505050' },
  { x: 346.638, y: 83.5254, fill: '#505050' },
  { x: 346.638, y: 26.9375, fill: '#505050' },
];

const strokedRectangles = [
  { x: 114.73, y: 309.878, fill: 'none', stroke: 'white', strokeWidth: 2 },
  { x: 114.73, y: 140.074, fill: 'none', stroke: '#505050', strokeWidth: 2 },
  { x: 114.73, y: 27.0742, fill: 'none', stroke: '#505050', strokeWidth: 2 },
  { x: 341, y: 253.074, fill: 'none', stroke: '#505050', strokeWidth: 2 },
  { x: 2, y: 366.074, fill: 'none', stroke: '#505050', strokeWidth: 2 },
  { x: 228, y: 197.074, fill: 'none', stroke: '#505050', strokeWidth: 2 },
  { x: 285, y: 84.0742, fill: 'none', stroke: '#505050', strokeWidth: 2 },
  { x: 228, y: 310.074, fill: 'none', stroke: '#505050', strokeWidth: 2 },
];

const initialLine = {
  d: 'M27 253.5H83.5L197 367H366.5H446.5V128.5H615.5',
  stroke: 'white',
  strokeWidth: 5,
};


const targetIndexes = [2, 3, 4, 11, 18, 25, 32, 39, 46];

export default function Coifficient() {
  const [activeRects, setActiveRects] = useState([]);
  const [linePath, setLinePath] = useState(initialLine.d);

  const getTextPosition = (x, y) => {
    const size = 25; // Assuming this is the size for the width and height
    const offset = size / 3;
    return { x: x + offset, y: y + offset };
  };

  const handleRectClick = () => {
    
  }

  return (
      <div>
      <svg width="616" height="393" viewBox="0 0 616 393" fill="none" xmlns="http://www.w3.org/2000/svg">
        {rectangles.map((rect, index) => {
          const textPos = getTextPosition(rect.x, rect.y);
          return (
            <g key={index}>
              <motion.rect
                x={rect.x}
                y={rect.y}
                width="27.604"
                height="27.604"
                transform={`rotate(-45 ${rect.x} ${rect.y})`}
                fill={activeRects.includes(index) ? 'white' : rect.fill}
                animate={{ fill: activeRects.includes(index) ? 'white' : rect.fill }}
                transition={{ duration: 0.5 }}
              />
              <text
                x={textPos.x}
                y={textPos.y}
                textAnchor="middle"
                onClick={() => handleRectClick(index)}
                alignmentBaseline="middle"
                fill="white" // Adjust color as needed
                transform={`rotate(45 ${textPos.x} ${textPos.y})`}
              >
                {index + 1}
              </text>
            </g>
          );
        })}
        {strokedRectangles.map((rect, index) => {
          const textPos = getTextPosition(rect.x, rect.y);
          return (
            <g key={`stroke-${index}`}  className={" cursor-pointer " } >
              <motion.rect
                x={rect.x}
                y={rect.y}
                width="35.4598"
                height="35.4598"
                transform={`rotate(-45 ${rect.x} ${rect.y})`}
                fill={rect.fill}
                stroke={rect.stroke}
                strokeWidth={rect.strokeWidth}
                style={{ cursor: 'pointer' }}
              />
            </g>
          );
        })}
        <motion.path
          d={linePath}
          stroke="white"
          strokeWidth="5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    </div>
  );
}


