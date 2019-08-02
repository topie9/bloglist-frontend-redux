import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm.js'
import LoginForm from './components/LoginForm.js'
import Notification from './components/Notification.js'
import Togglable from './components/Togglable.js'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUser, logout } from './reducers/authReducer'


const App = (props) => {
  const blogFormRef = React.createRef()

  useEffect(() => {
    props.initializeBlogs()
  }, []) // eslint-disable-line

  useEffect(() => {
    props.initializeUser()
  }, []) // eslint-disable-line

  console.log(props)
  return (
    <div>
      {props.user === null
        ? <div>
          <LoginForm />
        </div>
        :
        <div>
          <Notification />
          <div>
            <h2>blogs</h2>
            <p>{props.user.name} logged in <br />
              <button onClick={() => props.logout()}>logout</button>
            </p>
            <Togglable buttonLabel="new blog" ref={blogFormRef}>
              <BlogForm />
            </Togglable>
            <BlogList />
          </div>
        </div>
      }
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
  initializeUser,
  logout,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
