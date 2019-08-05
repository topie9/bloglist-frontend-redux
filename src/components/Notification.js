import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const Notification = (props) => {
  const { message, type } = props.notification

  let color = 'black'
  if (type === 'success') {
    color = 'green'
  } else if (type === 'error') {
    color = 'red'
  }

  if (message === '')
    return <div></div>

  return (
    <Message floating color={color}>
      {message}
    </Message>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
)(Notification)