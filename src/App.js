import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav';
import Login from './pages/Login';
import NewUserProfile from './components/NewUserProfile';

function App() {
  // if (sessionStorage.userEmail !== 'undefined') {
    return (
      <div className='app'>
          <Router>
            <Nav />
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/user' component={NewUserProfile}/>
              {/* <Route path='/manager' component={NewManagerProfile}/> */}
              <Route path='/dashboard' exact component={Dashboard} />
            </Switch>
          </Router>
      </div>
    )
  // } else {
  //   return (
  //     <div>
  //       <Router >
  //         <Nav />
  //         <Login />
  //       </Router>
  //     </div>
  //   )
  // }
}

export default App;
