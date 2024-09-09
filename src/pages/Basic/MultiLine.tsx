import { useEffect, useRef } from 'react';

const MultiLine = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.canvas.width = 800;
        ctx.canvas.height = 600;

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(300, 300);
        ctx.lineTo(100, 200);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(200, 300);
        ctx.lineTo(200, 200);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(300, 100);
        ctx.lineTo(300, 300);
        ctx.lineTo(300, 200);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'green';
        ctx.stroke();
      }
    }
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default MultiLine;
