import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

function renderApp(gl, session) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App gl={gl} session={session} />
    </React.StrictMode>,
  );
}

if (!window.ReactAppAR) {
  window.ReactAppAR = {};
}
window.ReactAppAR.startAR = renderApp;

if (!window.location.pathname.startsWith('/ar')) {
  renderApp();
}
