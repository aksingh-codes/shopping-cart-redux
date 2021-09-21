import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import "./App.css"

import Navbar from "./Navbar/Navbar"
import Products from "./Products/Products"
import Cart from "./Cart/Cart"
import SingleItem from "./SingleItem/SingleItem"

import {connect} from 'react-redux'

const App = ({currentItem}) => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {
            currentItem
            ? <Route exact path="/product/:id" component={SingleItem} />
            : <Redirect to='/' />
          }
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App)
