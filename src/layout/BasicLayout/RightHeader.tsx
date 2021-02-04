import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { editName } from '../../service/demo';

export interface RightHeaderProps {
  collapsed: boolean;
  collMenu(flag: boolean): void;
}

const RightHeader: React.FC<RightHeaderProps> = props => {
  useEffect(() => {
    // baseInfo({ id: 1082, channel: 'h5' });
    editName({
      file_id: 1743,
      file_name: 'uu.jpg',
    }).then(res => {
      console.log(res, 99);
    });
  }, []);
  return (
    <div
      className="flex-row jus-bet"
      style={{
        backgroundColor: '#fff',
        height: 64,
        boxShadow: '0 1px 4px rgb(0 21 41 / 8%)',
      }}
    >
      <div
        className="point"
        style={{ padding: '0 22px' }}
        onClick={() => {
          props.collMenu(!props.collapsed);
        }}
      >
        {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </div>
  );
};

export default RightHeader;
