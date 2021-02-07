import * as React from 'react';
import sty from './logo.module.less';
import { classNames } from '../../utils/classNames';
import { Image } from 'antd';
import { LOGO_SRC } from '../../utils/constans';

export interface LogoProps {
  collapsed: boolean;
}

const Logo: React.FC<LogoProps> = props => {
  return (
    <div className={classNames(sty.logo, 'flex-row', 'jus-cen', 'ag-cen')}>
      <Image width={50} src={LOGO_SRC} />
      {props.collapsed ? null : <div className={sty.logo_name}>老爸评测</div>}
    </div>
  );
};

export default Logo;
