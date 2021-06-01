import {h, render} from 'preact';
import {Router, Link} from 'preact-router';

import Home from './pages/home';
import Conference from './pages/conference';

function App() {
    return (
        <div>
            <header>
                <Link href="/">Home</Link>
                <br />
                <Link href="/conference/london-2021">London 2021</Link>
            </header>

            <Router>
                <Home path="/" />
                <Conference path="/conference/:slug" />
            </Router>
        </div>
    )
}

render(<App />, document.getElementById('app'));