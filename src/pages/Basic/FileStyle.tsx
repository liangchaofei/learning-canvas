import { useEffect, useRef } from 'react';

const FileStyle = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.canvas.width = 800;
        context.canvas.height = 600;

        // context.rect(200, 100, 400, 400);

        // const grad = context.createLinearGradient(200, 300, 600, 300);

        // grad.addColorStop(0, 'black');
        // grad.addColorStop(0.5, 'white');
        // grad.addColorStop(1, 'black');

        // context.fillStyle = grad;
        // context.fill();

        // 矩形快捷方式

        // const grd = context.createLinearGradient(100, 300, 700, 300);

        // //添加颜色断点
        // grd.addColorStop(0, 'olive');
        // grd.addColorStop(0.25, 'maroon');
        // grd.addColorStop(0.5, 'aqua');
        // grd.addColorStop(0.75, 'fuchsia');
        // grd.addColorStop(0.25, 'teal');

        // //应用渐变
        // context.fillStyle = grd;
        // context.strokeStyle = grd;

        // context.strokeRect(200, 50, 300, 50);
        // context.strokeRect(200, 100, 150, 50);
        // context.strokeRect(200, 150, 450, 50);

        // context.fillRect(200, 300, 300, 50);
        // context.fillRect(200, 350, 150, 50);
        // context.fillRect(200, 400, 450, 50);

        // context.fillRect(0, 550, 800, 25);

        // 径向渐变
        //添加渐变线
        const grd = context.createRadialGradient(400, 300, 100, 400, 300, 200);

        //添加颜色断点
        grd.addColorStop(0, 'olive');
        grd.addColorStop(0.25, 'maroon');
        grd.addColorStop(0.5, 'aqua');
        grd.addColorStop(0.75, 'fuchsia');
        grd.addColorStop(1, 'teal');

        //应用渐变
        context.fillStyle = grd;

        context.fillRect(100, 100, 600, 400);
      }
    }
  }, []);
  return <canvas ref={ref}></canvas>;
};

export default FileStyle;
