import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'

const UserList = (props) => {

  return (
    <Segment>
      <h2>Users</h2>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width='3'></Grid.Column>
          <Grid.Column><b>blogs created</b></Grid.Column>
        </Grid.Row>
        {props.sortedUsers
          .map(user =>
            <Grid.Row key={user.id}>
              <Grid.Column  width='3'><Link to={`/users/${user.id}`}>{user.name}</Link></Grid.Column>
              <Grid.Column>{user.blogs.length}</Grid.Column>
            </Grid.Row>
          )
        }
      </Grid>
    </Segment>
  )
}

const sortedUsers = (state) => {
  return (state.users
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
  )
}

const mapStateToProps = (state) => {
  return {
    sortedUsers: sortedUsers(state)
  }
}

export default connect(
  mapStateToProps,
)(UserList)