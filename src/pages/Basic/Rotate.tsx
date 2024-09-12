import { useEffect, useRef } from 'react';

const Rotate = () => {
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
        context.fillStyle = '#00AAAA';
        context.fillRect(100, 100, 200, 100);

        context.save();
        context.fillStyle = 'red';
        context.translate(100, 100);
        context.rotate(Math.PI / 4);
        context.fillRect(0, 0, 200, 100);
        context.restore();

        context.save();
        context.fillStyle = 'green';
        context.translate(200, 200);
        context.rotate(Math.PI / 4);
        context.fillRect(0, 0, 200, 100);
        context.restore();
      }
    }
  }, []);

  return <canvas ref={ref}></canvas>;
};

export default Rotate;
