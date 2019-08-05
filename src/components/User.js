import React from 'react'
import { connect } from 'react-redux'
import { Segment, List, Icon } from 'semantic-ui-react'

const User = (props) => {
  if (props.user === undefined) {
    return null
  }

  return (
    <Segment>
      <h2>{props.user.name}</h2>
      <h3>added blogs</h3>
      <List as='ol'>
        {props.user.blogs
          .map(b =>
            <List.Item key={b.id}>
              <Icon name='right triangle' />
              {b.title}
            </List.Item>
          )
        }
      </List>
    </Segment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user
  }
}

export default connect(
  mapStateToProps
) (User)