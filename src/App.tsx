import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';
import { useState } from 'react';


import Toolbar from "./components/toolbar/Toolbar";
import Spacer from './components/spacer/Spacer';
import Layout from './components/layout/Layout';
import Slide from './components/slide/Slide';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
   */
  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('slides_project_id');

  }, [client]);

  const [activePreview, setActivePreview] = useState(0);
  
  const setActive = (idx: number) => {
    setActivePreview(idx);
    /**
     * Snippyly Code Example
     * This section sets the user's location to the
     * slide index so that cursors correctly appear
     * for users that are on the same slide.
     */
    if (client) {
      client.setLocation({slideIdx: idx});
    }
  }

  return (
    <div className={styles['app-container']}>
      <Toolbar />
      <Spacer />
      <Layout
        sidebar={<Sidebar activePreview={activePreview} setActive={setActive} />}
        slide={<Slide active={activePreview} />}
      />
    </div>
  );
};

export default App;