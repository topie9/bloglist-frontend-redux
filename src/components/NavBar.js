import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Button } from 'semantic-ui-react'
import { logout } from '../reducers/authReducer'

const NavBar = (props) => {

  return (
    <div>
      <Menu>
        <Menu.Item link>
          <Link to='/'>blogs</Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to='/users'>users</Link>
        </Menu.Item>
        <Menu.Item>
          {props.user.name} logged in
          <Button onClick={() => props.logout()}>logout</Button>
        </Menu.Item>
      </Menu>
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