import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import App from './App';

Amplify.configure(awsconfig);

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <CssBaseline />
            <App />
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);
