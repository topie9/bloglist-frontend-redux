import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../reducers/authReducer'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/'>blogs</Link>
      <Link to='/users'>users</Link>

      {props.user.name} logged in
      <button onClick={() => props.logout()}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { logout }
) (NavBar)