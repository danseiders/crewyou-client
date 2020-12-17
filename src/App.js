import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './views/Dashboard'
import Nav from './components/Nav';
import Login from './views/Login';
import NewUserProfile from './components/NewUserProfile';
import EditUserProfile from './components/EditUserProfile';
import Home from './views/Home';
import Footer from './components/Footer';
import NewUser from './components/NewUser';

require('dotenv').config()



function App() {
  const [user, setUser] = useState({
  
    profile: false,
    crew: false,
    data: {}
  })
 

  if (sessionStorage.loggedIn == undefined) {
      return (
        <div className='App'>
          <Router >
            <Nav user={user} setUser={setUser}/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route 
                path='/login' 
                render={() => <Login user={user} setUser={setUser}/>}/>
              <Route 
                path='/user/new' 
                render={() => <NewUser user={user} setUser={setUser}/>} />
            </Switch>
            <Footer />
          </Router>
        </div>
      )
    } else {
      return (
        <div className='App'>
          <Router>
            <Nav user={user} setUser={setUser} />
            <Switch>
              <Route path='/profile/new' exact
                render={() => <NewUserProfile user={user} setUser={setUser} />} />
              <Route path='/profile/edit' exact
                render={() => <EditUserProfile user={user} setUser={setUser}/>} />
              <Route path='/dashboard' exact
                render={() => <Dashboard user={user} setUser={setUser} />}/>
            </Switch>
            <Footer />
          </Router>
      </div>
    )
  }
}


export default App;
