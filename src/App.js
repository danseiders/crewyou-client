import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Nav from './components/Nav';
import Login from './views/Login';
import NewUserProfile from './components/NewUserProfile';
import EditUserProfile from './components/EditUserProfile';
import Home from './views/Home';
import Footer from './components/Footer';



function App() {
  const user = sessionStorage.username
  
  if (user === undefined) {
      return (
        <div className='App'>
          <Router >
            <Nav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' component={Login} />
            </Switch>
            <Footer />
          </Router>
        </div>
      )
    } else {
      return (
        <div className='App'>
          <Router>
            <Nav />
            <Switch>
              <Route path='/profile/new' exact component={NewUserProfile}/>
              <Route path='/profile/edit' exact component={EditUserProfile}/>
              {/* <Route path='/manager' component={NewManagerProfile}/> */}
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
            <Footer />
          </Router>
      </div>
    )
  }
}

export default App;
