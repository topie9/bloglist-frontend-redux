import React from 'react'
import { connect } from 'react-redux'
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
      <form onSubmit={addBlog}>
        <div>
          title:
          <input name='title' />
        </div>
        <div>
          author:
          <input name='author' />
        </div>
        <div>
          url:
          <input name='url' />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
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