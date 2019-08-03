import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router,
  Route, } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import UserList from './components/UserList'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeUser, logout } from './reducers/authReducer'


const App = (props) => {
  const blogFormRef = React.createRef()

  useEffect(() => {
    props.initializeBlogs()
  }, []) // eslint-disable-line

  useEffect(() => {
    props.initializeUsers()
  }, []) // eslint-disable-line

  useEffect(() => {
    props.initializeUser()
  }, []) // eslint-disable-line

  console.log(props)

  if (!props.user) {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <Notification />
      <Router>
        <div>
          <h2>blogs</h2>
          <p>{props.user.name} logged in <br />
            <button onClick={() => props.logout()}>logout</button>
          </p>
          <Route exact path='/' render={() =>
            <div>
              <Togglable buttonLabel="new blog" ref={blogFormRef}>
                <BlogForm />
              </Togglable>
              <BlogList />
            </div>
          } />
          <Route exact path='/users' render={() => <UserList />} />
        </div>
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  initializeBlogs,
  initializeUsers,
  initializeUser,
  logout,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
