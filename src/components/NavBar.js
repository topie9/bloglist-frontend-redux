import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Button } from 'semantic-ui-react'
import { logout } from '../reducers/authReducer'

const NavBar = (props) => {
  const [ activeItem, setActiveItem ] = useState('blogs')

  const handleClick = (name) => setActiveItem(name)

  return (
    <div>
      <Menu inverted color='violet'>
        <Menu.Item
          active={ activeItem === 'blogs' }
          onClick={() => handleClick('blogs')}
          as={ Link } to='/'>
          blogs
        </Menu.Item>
        <Menu.Item
          active={ activeItem === 'users' }
          onClick={() => handleClick('users')}
          as={ Link } to='/users'>
          users
        </Menu.Item>
        <Menu.Item>
          {props.user.name} logged in &nbsp;
          <Button secondary onClick={() => props.logout()}>logout</Button>
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