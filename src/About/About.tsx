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
          dispatch({ type: 'add' });
        }}
      >
        about
      </div>
    </div>
  );
};

export default About;
