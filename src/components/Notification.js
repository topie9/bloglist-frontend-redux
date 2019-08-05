import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const Notification = (props) => {
  const { message, type } = props.notification

  if (message === '')
    return <div></div>

  if (type === 'success') {
    return (
      <Message success>
        {message}
      </Message>
    )
  } else if (type === 'error') {
    return (
      <Message error>
        {message}
      </Message>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
)(Notification)