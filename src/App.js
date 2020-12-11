import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Nav from './components/Nav';
import Login from './views/Login';
import NewUserProfile from './components/NewUserProfile';

function App() {
  const user = sessionStorage.username
  
  if (user === undefined) {
      return (
        <div>
          <Router >
            <Nav />
            <Route path='/' component={Login} />
          </Router>
        </div>
      )
  } else {
    return (
      <div className='app'>
          <Router>
            <Nav />
            <Switch>
              <Route path='/user' component={NewUserProfile}/>
              {/* <Route path='/manager' component={NewManagerProfile}/> */}
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
