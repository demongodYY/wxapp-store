import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(
  <App source="file:///home/loketa/Coding/Project/WebstormProjects/wxapp-store/src/data/test.json"/>,
  document.getElementById('root')
);
