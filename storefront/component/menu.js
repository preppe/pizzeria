import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/home'
import Ordine from '../pages/ordine'

export default class Menu extends Component {
    render() {
        return (
            <Router>
            <div>
              <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand">Menù</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/order">Ordina</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Accedi</Link>
                    </li>
                  </ul>
                </div>
              </nav>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/order" component={Ordine} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        )
    }
}
