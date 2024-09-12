import { useEffect, useRef } from 'react';

const Scale = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.canvas.width = 800;
        context.canvas.height = 600;
        context.fillStyle = '#fff';
        context.fillRect(0, 0, 800, 600);
        for (let i = 1; i < 4; i++) {
          context.save();
          context.scale(i, i);
          context.strokeRect(50, 50, 150, 100);
          context.restore();
        }
      }
    }
  }, []);
  return <canvas ref={ref}></canvas>;
};

export default Scale;
