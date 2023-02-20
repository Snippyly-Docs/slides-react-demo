import styles from './Toolbar.module.css';

import { 
  SnippylyPresence, 
  SnippylyRecorderTool, 
  SnippylyTagTool,
  SnippylyCommentTool,
  SnippylyHuddleTool,
  SnippylySidebarButton,
} from '@snippyly/react';

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
        {/**
         * Snippyly Code Example
         * Feature: Tags -- Step #2
         * Feature: Recorder -- Step #2
         * Feature: Presence
         * Feature: Comments -- Step #2
         * Feature: Comments Sidebar -- Step #2
         * Feature: Huddle -- Step #2
         */}
        <SnippylyCommentTool />
        <SnippylyTagTool className={styles['tag-tool']} />
        <SnippylyHuddleTool type="all" />
        <SnippylyRecorderTool type="all" className={styles['recorder-tool']} />
        <SnippylySidebarButton />
        <SnippylyPresence />
      </div>
    </div>
  );
};

export default Toolbar;