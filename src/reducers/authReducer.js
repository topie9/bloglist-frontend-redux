import loginService from '../services/login'
import blogService from '../services/blogs'

export const initializeUser = () => {
  return dispatch  => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch({
        type: 'INIT_USER',
        data: user
      })
    }
    else {
      // handling when not logged in TOFIX
      dispatch({
        type: 'INIT_USER',
        data: null
      })
    }
  }
}

export const login = (credentials) => {
  return async dispatch => {
    try {
      const user = await loginService.login(credentials)
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch({
        type: 'LOGIN_USER',
        data: user
      })
    } catch(exception) {
      console.log(exception)
      // set notification to show unsuccessfull login
      dispatch({
        type: 'LOGIN_USER',
        data: null
      })
    }
  }
}

export const logout = () => {
  return dispatch => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch({
      type: 'LOGOUT_USER',
      data: null
    })
  }
}

const authReducer = (state = null, action) => {

  switch (action.type) {
  case 'INIT_USER':
    return action.data
  case 'LOGIN_USER':
    return action.data
  case 'LOGOUT_USER':
    return action.data
  default:
    return state
  }
}

export default authReducer