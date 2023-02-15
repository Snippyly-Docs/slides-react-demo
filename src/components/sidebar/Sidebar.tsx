import styles from './Sidebar.module.css';

import PlusIcon from '../../icons/plus.svg';
import ThumbnailImage from '../../icons/thumbnail.png';

const Sidebar = (props: any) => {

  return (
    <div className={styles['sidebar']}>
      <div className={styles['slide-previews']}>
        <div onClick={() => props.setActive(0)} className={`${styles['slide-preview']} ${props.activePreview === 0 ? styles['active'] : null}`}>
          <p className={styles['slide-label']}>1</p>
          <img src={ThumbnailImage} />
          <p className={styles['thumbnail-text']}>Q1 Retrospective</p>
        </div>
        <div onClick={() => props.setActive(1)} className={`${styles['slide-preview']} ${props.activePreview === 1 ? styles['active'] : null}`}>
          <p className={styles['slide-label']}>2</p>
          <div className={styles['placeholder']} />
        </div>
        <div onClick={() => props.setActive(2)} className={`${styles['slide-preview']} ${props.activePreview === 2 ? styles['active'] : null}`}>
          <p className={styles['slide-label']}>3</p>
          <img src={ThumbnailImage} />
        </div>
      </div>
      <div className={styles['new-slide']}>
        <img src={PlusIcon} />
        <p>New slide</p>
      </div>
    </div>
  );
};

export default Sidebar;