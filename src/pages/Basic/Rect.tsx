import { useEffect, useRef } from 'react';

const Rect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawRect = (
    context: any,
    x: number,
    y: number,
    width: number,
    height: number,
    fillColor: string,
    borderWidth: number,
    borderColor: string,
  ) => {
    context.beginPath();
    context.rect(x, y, width, height);
    // context.moveTo(x, y)
    // context.lineTo(x + width, y)
    // context.lineTo(x + width, y + height)
    // context.lineTo(x, y + height)
    context.closePath();
    context.fillStyle = fillColor; //选择油漆桶的颜色
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.fill(); //确定填充
    context.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.canvas.width = 800;
        ctx.canvas.height = 600;

        drawRect(ctx, 100, 100, 100, 100, 'yellow', 2, 'red');

        drawRect(ctx, 200, 200, 200, 200, 'yellow', 2, 'red');
      }
    }
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default Rect;
