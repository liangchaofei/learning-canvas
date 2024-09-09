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

        context.beginPath();
        context.moveTo(100, 100);
        context.lineTo(300, 300);
        context.lineTo(100, 500);
        context.lineJoin = 'miter';
        context.lineWidth = 20;
        context.strokeStyle = 'red';
        context.stroke();

        context.beginPath();
        context.moveTo(300, 100);
        context.lineTo(500, 300);
        context.lineTo(300, 500);
        context.lineJoin = 'bevel';
        context.lineWidth = 20;
        context.strokeStyle = 'blue';
        context.stroke();

        context.beginPath();
        context.moveTo(500, 100);
        context.lineTo(700, 300);
        context.lineTo(500, 500);
        context.lineJoin = 'round';
        context.lineWidth = 20;
        context.strokeStyle = 'black';
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
