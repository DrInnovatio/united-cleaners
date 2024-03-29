import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services.jsx'
import Products from './components/pages/Products.jsx'
import FormExampleFieldControl from './components/pages/ReportBadCustomer'
import SignUp from './components/SignInUp.jsx'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={ SignUp } />
          <Route path='/reportBadCustomers' component={FormExampleFieldControl}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
