import styles from './Sidebar.module.css';
import { useState } from 'react';

import PlusIcon from '../../icons/plus.svg';
import ThumbnailImage from '../../icons/thumbnail.png';

const Sidebar = () => {

  const [activePreview, setActivePreview] = useState(0);

  const setActive = (idx: number) => {
    setActivePreview(idx);
  }

  return (
    <div className={styles['sidebar']}>
      <div className={styles['slide-previews']}>
        <div onClick={() => setActive(0)} className={`${styles['slide-preview']} ${activePreview === 0 ? styles['active'] : null}`}>
          <p className={styles['slide-label']}>1</p>
          <img src={ThumbnailImage} />
          <p className={styles['thumbnail-text']}>Q1 Retrospective</p>
        </div>
        <div onClick={() => setActive(1)} className={`${styles['slide-preview']} ${activePreview === 1 ? styles['active'] : null}`}>
          <p className={styles['slide-label']}>2</p>
          <img src={ThumbnailImage} />
        </div>
        <div onClick={() => setActive(2)} className={`${styles['slide-preview']} ${activePreview === 2 ? styles['active'] : null}`}>
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