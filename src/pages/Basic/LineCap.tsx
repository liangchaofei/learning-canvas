import { useEffect, useRef } from 'react';

const LineProps = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.canvas.width = 800;
        context.canvas.height = 800;

        context.lineWidth = 50;
        context.strokeStyle = 'red';

        context.beginPath();
        context.moveTo(100, 100);
        context.lineTo(300, 100);
        context.lineCap = 'butt';
        context.stroke();

        context.beginPath();
        context.moveTo(100, 300);
        context.lineTo(700, 300);
        context.lineCap = 'round';
        context.stroke();

        context.beginPath();
        context.moveTo(100, 500);
        context.lineTo(700, 500);
        context.lineCap = 'square';
        context.stroke();

        context.lineWidth = 3;
        context.strokeStyle = 'black';

        context.beginPath();
        context.moveTo(100, 0);
        context.lineTo(100, 600);
        context.moveTo(700, 0);
        context.lineTo(700, 600);
        context.stroke();
      }
    }
  }, []);
  return (
    <>
      <div>lineCap</div>
      <canvas ref={ref}></canvas>
    </>
  );
};

export default LineProps;
