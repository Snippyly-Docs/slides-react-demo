import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VeltProvider, VeltCursor, VeltRecorderControlPanel, VeltRecorderNotes, VeltTags } from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Velt Code Example
       * Feature: Recorder -- Step #1
       * Feature: Tags -- Step #1
       * Feature: Live Cursors
       */}
    <VeltRecorderControlPanel />
    <VeltRecorderNotes />
    <VeltCursor />
    <VeltTags />
    <App />
  </VeltProvider>
);