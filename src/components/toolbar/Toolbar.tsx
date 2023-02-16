import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyRecorderTool, SnippylyTagTool } from '@snippyly/react';

import BarsIcon from '../../icons/bars.svg';
import GfxIcon from '../../icons/gfx.svg';
import ShapesIcon from '../../icons/shapes.svg';
import TextIcon from '../../icons/text.svg';


const Toolbar = () => {

  return (
    <div className={styles['toolbar']}>
      <img src={ShapesIcon} />
      <img src={TextIcon} />
      <img src={GfxIcon} />
      <img src={BarsIcon} />
      <div className={styles['toolbar-right']}>
        <SnippylyTagTool className={styles['tag-tool']} />
        <SnippylyRecorderTool type="all" className={styles['recorder-tool']} />
        <SnippylyPresence />
      </div>
    </div>
  );
};

export default Toolbar;