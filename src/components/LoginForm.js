import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
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
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>username</label>
          <input name='username' />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input type='password' name='password' />
        </Form.Field>
        <Button type="submit">login</Button>
      </Form>
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