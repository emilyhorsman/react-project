import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
import Timer from './components/Timer'

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  ReactDOM.render(
      <div>
        <App foo="Emily!" />
        <Timer />
      </div>
  , app);
}
