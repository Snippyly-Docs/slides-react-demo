import styles from './Layout.module.css';

const Layout = (props: any) => {
  return (
    <div className={styles['main-content']}>
      <div className={styles['sidebar']}>
        { props.sidebar ? props.sidebar : null }
      </div>
      <div className={styles['slide-content']}>
        { props.slide ? props.slide : null }
      </div>
    </div>
  );
};

export default Layout;