import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Website from './Website';

ReactDOM.render(<Website />, document.getElementById('root'));
registerServiceWorker();
