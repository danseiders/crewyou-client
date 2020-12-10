import './App.css';
import { BrowswerRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Login from './views/Login';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
