import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './Header';

function App() {
    return (
        <div>
            <Header />
        </div>
    );
}

export default withAuthenticator(App);
