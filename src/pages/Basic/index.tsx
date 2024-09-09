import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import FileStyle from './FileStyle';
import Line from './Line';
import LineProps from './LineCap';
import LineJoin from './LineJoin';
import MultiLine from './MultiLine';
import Rect from './Rect';

const Canvas: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: <Line />,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: <MultiLine />,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: <Rect />,
    },
    {
      key: '4',
      label: 'Tab 4',
      children: <LineProps />,
    },
    {
      key: '5',
      label: 'Tab 5',
      children: <LineJoin />,
    },
    {
      key: '6',
      label: 'Tab 6',
      children: <FileStyle />,
    },
  ];
  return (
    <>
      <Tabs items={items} />
    </>
  );
};

export default Canvas;
