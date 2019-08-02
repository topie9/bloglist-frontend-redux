const initialState = {
  message: '',
  type: 'none'
}

export const setNotification = (notification, time = 5) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    setTimeout(() => dispatch(clearNotification()), 1000 * time)
  }
}

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_NOTIFICATION',
      notification: initialState
    })
  }
}

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.notification
  case 'CLEAR_NOTIFICATION':
    return action.notification
  default:
    return state
  }
}

export default notificationReducer