import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router,
  Route, } from 'react-router-dom'
import { Blog, BlogList, BlogForm,
  User, UserList, LoginForm, Notification,
  Togglable, NavBar  } from './components'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeUser } from './reducers/authReducer'


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
        <NavBar />
        <div>
          <h2>blog app</h2>
          <Route exact path='/' render={() =>
            <div>
              <Togglable buttonLabel="new blog" ref={blogFormRef}>
                <BlogForm />
              </Togglable>
              <BlogList />
            </div>
          } />
          <Route exact path='/users' render={() => <UserList />} />
          <Route exact path='/users/:id' render={({ match }) =>
            <User user={props.users.find(u => u.id === match.params.id)} />
          } />
          <Route exact path='/blogs/:id' render={({ match }) =>
            <Blog blog={props.blogs.find(b => b.id === match.params.id)} />
          } />
        </div>
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    users: state.users,
    user: state.user
  }
}

const mapDispatchToProps = {
  initializeBlogs,
  initializeUsers,
  initializeUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
