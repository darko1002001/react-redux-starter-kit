import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import RaisedButton from 'material-ui/RaisedButton';


export const HomeView = () => (
  <div className="container-fluid text-center">
    <div className="row">
      <h4>Welcome To the feedback configurator</h4>
    </div>

    <Link to='/counter' className="row" activeClassName='route--active'>
      Load a merchant by ID
    </Link>
    <Link to='/counter' activeClassName='route--active'>
      Login and pick a merchant
    </Link>
    <RaisedButton label="Default" />
  </div>
)

export default HomeView
