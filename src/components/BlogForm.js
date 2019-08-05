import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const BlogForm = (props) => {

  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value
    }
    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''

    props.createBlog(newBlog)
    props.setNotification({
      message: `a new blog ${newBlog.title} by ${newBlog.author} added`,
      type: 'success'
    }, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <Form onSubmit={addBlog}>
        <Form.Field>
          <label>title:</label>
          <input name='title' />
        </Form.Field>
        <Form.Field>
          <label>author:</label>
          <input name='author' />
        </Form.Field>
        <Form.Field>
          <label>url:</label>
          <input name='url' />
        </Form.Field>
        <div>
          <Button primary type="submit">create</Button>
        </div>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  createBlog,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(BlogForm)