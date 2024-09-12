import { useEffect, useRef } from 'react';

const BezierCurve = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const drawPrairie = (ctx: CanvasRenderingContext2D) => {
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(0, 420);
    ctx.bezierCurveTo(250, 300, 350, 550, 800, 400);
    ctx.lineTo(800, 600);
    ctx.lineTo(0, 600);
    ctx.closePath();
  };

  const drawSky = (cxt: CanvasRenderingContext2D) => {
    cxt.save();

    cxt.beginPath();
    cxt.moveTo(0, 420);
    cxt.bezierCurveTo(250, 300, 350, 550, 800, 400);
    cxt.lineTo(800, 0);
    cxt.lineTo(0, 0);
    cxt.closePath();

    const lineStyle = cxt.createRadialGradient(400, 0, 50, 400, 0, 200);
    lineStyle.addColorStop(0, '#42A9AA');
    lineStyle.addColorStop(1, '#2491AA');

    cxt.fillStyle = lineStyle;

    cxt.fill();

    cxt.restore();
  };

  /* Draw a star
     context:  canvas.getContext("2d") object
     cx: X-axis position of the star
     cy: Y-axis position of the star
     spikes: Number of points on the star
     outerRadius: Outer radius of the star
     innerRadius: Inner radius of the star
     */
  function drawStar(
    cxt: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
  ) {
    const step = Math.PI / spikes;
    let rotation = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;

    cxt.beginPath();
    cxt.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rotation) * outerRadius;
      y = cy + Math.sin(rotation) * outerRadius;
      cxt.lineTo(x, y);
      rotation += step;

      x = cx + Math.cos(rotation) * innerRadius;
      y = cy + Math.sin(rotation) * innerRadius;
      cxt.lineTo(x, y);
      rotation += step;
    }

    cxt.closePath();
    cxt.fillStyle = 'rgba(255, 255, 255, 0.8)';
    cxt.fill();
  }

  /* Draw a crescent moon
     context: canvas.getContext("2d") object
     cx: X-axis position of the moon
     cy: Y-axis position of the moon
     radius: Radius of the moon
     */
  function drawMoon(
    cxt: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    radius: number,
  ) {
    // Draw full circle (moon body)
    cxt.beginPath();
    cxt.arc(cx, cy, radius, 0, Math.PI * 2, false);
    cxt.fillStyle = '#F4F1C9'; // Light yellow moon color
    cxt.fill();

    // Draw smaller circle to create crescent shape
    cxt.beginPath();
    cxt.arc(
      cx - radius / 3,
      cy - radius / 3,
      radius * 0.9,
      0,
      Math.PI * 2,
      false,
    );
    cxt.fillStyle = '#2491AA'; // Sky color to create crescent
    cxt.fill();
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
        drawPrairie(context);
        drawSky(context);

        // Draw random stars
        for (let i = 0; i < 10; i++) {
          const x0 = 800 * Math.random();
          const y0 = 300 * Math.random();
          const spikes = 5;
          const outerRadius = 20 * Math.random() + 10;
          const innerRadius = outerRadius / 2;
          drawStar(context, x0, y0, spikes, outerRadius, innerRadius);
        }

        // Draw the moon
        drawMoon(context, 650, 100, 50); // Position moon at (650, 100) with radius 50
      }
    }
  }, []);

  return <canvas ref={ref}></canvas>;
};

export default BezierCurve;
