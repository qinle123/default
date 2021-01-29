import React from 'react';
import sty from './ff.module.less';

export interface AboutProps {
  
}
 
const About: React.FC<AboutProps> = () => {
  return <div>
    <div className={sty.ab}>about</div>
  </div>
}
 
export default About;