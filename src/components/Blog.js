import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, List, Segment, Divider } from 'semantic-ui-react'
import { addLikeToBlog, addCommentToBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const Blog = (props) => {
  if (props.blog === undefined) {
    return null
  }
  const blog = props.blog

  const addLike = (blog) => {
    props.addLikeToBlog(blog)
    props.setNotification({
      message: 'liked the blog',
      type: 'success'
    }, 3)
  }

  const addComment = (event) => {
    event.preventDefault()
    const comment = event.target.comment.value
    event.target.comment.value = ''
    if (comment !== '') {
      props.addCommentToBlog(blog.id, comment)
    } else {
      props.setNotification({
        message: 'cannot add empty comment',
        type: 'error'
      }, 3)
    }
  }

  return (
    <Segment color='violet'>
      <h2>{blog.title} {blog.author}</h2>
      <a href={blog.url}>{blog.url}</a> <br />
      {blog.likes} likes &nbsp;
      <Button id='like' onClick={() => addLike(blog)}>like</Button> <br />
      added by {blog.user.name}
      <Divider></Divider>
      <div>
        <h2>comments</h2>
        <div>
          <Form onSubmit={addComment}>
            <Form.Field>
              <input id='comment' name='comment' />
            </Form.Field>
            <Button primary type="submit">add comment</Button>
          </Form>
        </div>
        <List bulleted>
          {blog.comments.map(c => <List.Item key={c}>{c}</List.Item>)}
        </List>
      </div>
    </Segment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: ownProps.blog
  }
}

const mapDispatchToProps = {
  addLikeToBlog,
  addCommentToBlog,
  setNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Blog)