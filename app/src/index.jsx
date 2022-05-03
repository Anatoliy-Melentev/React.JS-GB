import React from 'react';
import ReactDOM from 'react-dom';
import './styles/variables.sass';
import './styles/mixins.sass';
import './styles/reset.sass';
import './index.sass';
import App from './App';

ReactDOM.render(
  (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ), document.getElementById('root'),
);
