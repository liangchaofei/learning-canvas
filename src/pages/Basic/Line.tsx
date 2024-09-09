import React, { useEffect, useRef } from 'react';

const CanvasLine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set up canvas dimensions
        ctx.canvas.width = 800;
        ctx.canvas.height = 600;

        // Draw a straight line
        ctx.moveTo(100, 100); // Starting point (x, y)
        ctx.lineTo(600, 600); // Ending point (x, y)
        ctx.strokeStyle = 'black'; // Line color
        ctx.lineWidth = 2; // Line width
        ctx.stroke(); // Render the line
      }
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasLine;
