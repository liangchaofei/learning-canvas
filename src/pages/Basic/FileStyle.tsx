import { useEffect, useRef } from 'react';

const FileStyle = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {}, []);
  return <canvas ref={ref}></canvas>;
};

export default FileStyle;
