import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import Arc from './Arc';
import BezierCurve from './BezierCurve';
import Curve from './Curve';
import FileStyle from './FileStyle';
import Line from './Line';
import LineProps from './LineCap';
import LineJoin from './LineJoin';
import MultiLine from './MultiLine';
import Rect from './Rect';
import Rotate from './Rotate';
import Scale from './Scale';
import Transform from './Transform';
import Translate from './Translate';

const Canvas: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '直线',
      children: <Line />,
    },
    {
      key: '2',
      label: '多条线',
      children: <MultiLine />,
    },
    {
      key: '3',
      label: '矩形',
      children: <Rect />,
    },
    {
      key: '4',
      label: '直线属性',
      children: <LineProps />,
    },
    {
      key: '5',
      label: '直线连接',
      children: <LineJoin />,
    },
    {
      key: '6',
      label: '颜色填充',
      children: <FileStyle />,
    },
    {
      key: '7',
      label: '圆弧',
      children: <Arc />,
    },
    {
      key: '8',
      label: '二次贝塞尔曲线',
      children: <Curve />,
    },
    {
      key: '9',
      label: '三次贝塞尔曲线',
      children: <BezierCurve />,
    },
    {
      key: '10',
      label: '平移',
      children: <Translate />,
    },
    {
      key: '11',
      label: '旋转',
      children: <Rotate />,
    },
    {
      key: '12',
      label: '缩放',
      children: <Scale />,
    },
    {
      key: '13',
      label: '矩阵变换',
      children: <Transform />,
    },
    {
      key: '14',
      label: '文本渲染',
      children: <Transform />,
    },
    {
      key: '15',
      label: '文本对齐',
      children: <Transform />,
    },
    {
      key: '16',
      label: '阴影',
      children: <Transform />,
    },
    {
      key: '17',
      label: '裁剪',
      children: <Transform />,
    },
  ];
  return (
    <>
      <Tabs items={items} />
    </>
  );
};

export default Canvas;
