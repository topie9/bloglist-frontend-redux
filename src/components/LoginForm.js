import React from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/authReducer'

const LoginForm = (props) => {

  const handleLogin = async (event) => {
    event.preventDefault()
    const credentials = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    event.target.username.value = ''
    event.target.password.value = ''
    props.login(credentials)
  }

  return (
    <div>
      <h2>Log in to application</h2>

      <form onSubmit={handleLogin}>
        <div>
          username
          <input name='username' />
        </div>
        <div>
          password
          <input type='password' name='password' />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  login,
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)