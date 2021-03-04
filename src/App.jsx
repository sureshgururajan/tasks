import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './Header';
import Todolist from './Todolist';

function App() {
    return (
        <div>
            <Header />
            <Todolist />
        </div>
    );
}

export default withAuthenticator(App);
