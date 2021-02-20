import { context } from '@/appReducer';
import React, { useContext } from 'react';
import sty from './ff.module.less';

const About: React.FC = () => {
  const { dispatch } = useContext(context);

  return (
    <div>
      <div
        className={sty.ab}
        onClick={() => {
          dispatch({
            type: 'SET_AVATOR',
            payload: { avator: 'https://cdn.daddylab.com/tpl/Public/avatar/2744072_1552485160735981495.jpg' },
          });
        }}
      >
        about
      </div>
    </div>
  );
};

export default About;
