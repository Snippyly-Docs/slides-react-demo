import styles from './Slide.module.css';

import BackgroundImage from '../../icons/bg.png';

const Slide = () => {

  return (
    <div className={styles['slide-container']}>
      <div className={styles['overlay']}>
        <p className={styles['overlay-text']}>Q1 Retrospective</p>
      </div>
      <img className={styles['slide']} src={BackgroundImage} />
    </div>
  );
};

export default Slide;