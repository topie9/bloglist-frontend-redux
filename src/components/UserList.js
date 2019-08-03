import React from 'react'
import { connect } from 'react-redux'

const UserList = (props) => {

  return (
    <div>
      <h2>Users</h2>
      <table>
        <tr><td></td><td><b>blogs created</b></td></tr>
        {props.users
          .sort((a, b) =>
            a.name < b.name
              ? -1
              : 1
          )
          .map(user =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
)(UserList)