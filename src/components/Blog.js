import React from 'react'
import { connect } from 'react-redux'
import { addLikeToBlog } from '../reducers/blogReducer'
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

  return (
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <a href={blog.url}>{blog.url}</a> <br />
      {blog.likes} likes
      <button onClick={() => addLike(blog)}>like</button> <br />
      added by {blog.user.name}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: ownProps.blog
  }
}

const mapDispatchToProps = {
  addLikeToBlog,
  setNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Blog)