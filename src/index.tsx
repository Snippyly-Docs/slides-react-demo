import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyRecorderControlPanel, SnippylyRecorderNotes } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <SnippylyCursor />
      <App />
    </SnippylyProvider>
  </React.StrictMode>
);