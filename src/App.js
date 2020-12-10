import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Login from './views/Login';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
