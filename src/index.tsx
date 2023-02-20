import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyRecorderControlPanel, SnippylyRecorderNotes, SnippylyTags } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    <SnippylyProvider apiKey="K0klwhmHHauN8GMHDbch">
      {/**
       * Snippyly Code Example
       * Feature: Recorder -- Step #1
       * Feature: Tags -- Step #1
       * Feature: Live Cursors
       */}
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <SnippylyCursor />
      <SnippylyTags />
      <App />
    </SnippylyProvider>
  </React.StrictMode>
);