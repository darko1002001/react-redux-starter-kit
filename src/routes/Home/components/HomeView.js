import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import RaisedButton from 'material-ui/RaisedButton';


export const HomeView = () => (
  <div className="container-fluid text-center">
    <div className="row">
      <h4>Welcome To the feedback configurator</h4>
    </div>

    <div className="row">
      <Link to='/merchant/load' className="row" activeClassName='route--active'>
        <RaisedButton label="Load merchant by id" />
      </Link>
    </div>
    <div className="row">
      <Link to='/counter' activeClassName='route--active'>
        <RaisedButton label="login with a shore account" />
      </Link>
    </div>

  </div>
)

export default HomeView
