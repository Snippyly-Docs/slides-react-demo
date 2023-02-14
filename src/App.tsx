import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';


import Toolbar from "./components/toolbar/Toolbar";
import Spacer from './components/spacer/Spacer';
import Layout from './components/layout/Layout';
import Slide from './components/slide/Slide';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <Toolbar />
      <Spacer />
      <Layout
        sidebar={<Sidebar />}
        slide={<Slide />}
      />
    </div>
  );
};

export default App;