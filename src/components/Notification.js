import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const { message, type } = props.notification
  const style = {
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    zIndex: 101,
    position: 'absolute',
  }

  if (type === 'error') {
    style.color = 'red'
  } else if (type === 'success') {
    style.color = 'green'
  }

  if (message === '')
    return <div></div>

  return (
    <div style={style}>
      {message}
    </div>
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