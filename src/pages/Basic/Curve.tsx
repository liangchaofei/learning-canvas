import { useEffect, useRef } from 'react';

const Curve = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.canvas.width = 800;
        context.canvas.height = 600;
        context.fillStyle = '#FFF';
        context.fillRect(0, 0, 800, 600);

        context.lineWidth = 6;
        context.strokeStyle = '#333';
        context.beginPath();
        context.moveTo(60, 337);
        context.quadraticCurveTo(256, 43, 458, 336);
        context.stroke();
      }
    }
  }, []);
  return <canvas ref={ref}></canvas>;
};

export default Curve;
