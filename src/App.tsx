import { useEffect } from "react";
import { useVeltClient } from '@veltdev/react';
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
   * Velt Code Example
   * Initializes the Velt SDK.
   */
  const { client } = useVeltClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('slides_project_id');

    // Initialize location with first slide
    client.setLocation({ slideIdx: 0 });

  }, [client]);

  useEffect(() => {

    if (!client) return;

    client.getPresenceElement().getOnlineUsersOnCurrentDocument().subscribe((users: any) => {
      if (users === null) return;
      if (users.length === 0) {
        const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

        if (isDataReset === null) {
          console.log('reset data!!');
          fetch(
            "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({ documentId: 'slides_project_id' }),
            }
          );
          window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
        }
      }
    });

  }, [client]);

  const [activePreview, setActivePreview] = useState(0);

  const setActive = (idx: number) => {
    setActivePreview(idx);
    /**
     * Velt Code Example
     * This section sets the user's location to the
     * slide index so that cursors correctly appear
     * for users that are on the same slide.
     */
    if (client) {
      client.setLocation({ slideIdx: idx });
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