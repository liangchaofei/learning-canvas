import { useEffect, useRef } from 'react';

const Arc = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  function drawArcTo(
    cxt: any,
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    r: number,
  ) {
    cxt.beginPath();
    cxt.moveTo(x0, y0);
    cxt.arcTo(x1, y1, x2, y2, r);

    cxt.lineWidth = 6;
    cxt.strokeStyle = 'red';
    cxt.stroke();

    // cxt.beginPath();
    // cxt.moveTo(x0, y0);
    // cxt.lineTo(x1, y1);
    // cxt.lineTo(x2, y2);

    // cxt.lineWidth = 1;
    // cxt.strokeStyle = '#0088AA';
    // cxt.stroke();
  }

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.canvas.width = 800;
        context.canvas.height = 600;
        context.fillStyle = '#FFF';
        context.fillRect(0, 0, 800, 600);

        // drawArcTo(context, 200, 200, 600, 200, 600, 400, 100);
        drawArcTo(context, 200, 100, 600, 100, 600, 400, 400);
      }
    }
  }, []);
  return <canvas ref={ref}></canvas>;
};
export default Arc;
