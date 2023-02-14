import styles from './Sidebar.module.css';

import PlusIcon from '../../icons/plus.svg';
import ThumbnailImage from '../../icons/thumbnail.png';

const Sidebar = () => {

  return (
    <div className={styles['sidebar']}>
      <div className={styles['slide-previews']}>
        <div className={styles['slide-preview']}>
          <p className={styles['slide-label']}>1</p>
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