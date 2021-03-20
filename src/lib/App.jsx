import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './Header';
import Todolist from './Todolist';

const theme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <Header />
                <Todolist />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default withAuthenticator(App);
