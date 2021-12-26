import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import Inspect from 'inspx';

ReactDOM.render(
  <Inspect>
    <App />
  </Inspect>,
  document.getElementById('root')
);
