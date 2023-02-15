import styles from './Slide.module.css';

import BackgroundImage from '../../icons/bg.png';

const Slide = (props: any) => {

  const renderSlide = () => {
    switch (props.active) {
      case 0:
        return (
          <div className={styles['slide-container']}>
            <div className={styles['overlay']}>
              <p className={styles['overlay-text']}>Q1 Retrospective</p>
            </div>
            <img className={styles['slide']} src={BackgroundImage} />
          </div>
        );
      case 1:
        return (
          <div className={styles['slide-container']}>
            <div className={styles['placeholder-slide']} />
          </div>);
      case 2:
        return (
          <div className={styles['slide-container']}>
            <img className={styles['slide']} src={BackgroundImage} />
          </div>);
    }
  }

  return (
    <>
      {renderSlide()}
    </>
  );
};

export default Slide;