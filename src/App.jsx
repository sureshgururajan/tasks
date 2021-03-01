import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
    return (
        <div className="App">
            <header className = "App-header">
                OpenTasks
            </header>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);
