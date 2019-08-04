import React from 'react'
import { connect } from 'react-redux'
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

    props.addCommentToBlog(blog.id, comment)
  }

  return (
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <a href={blog.url}>{blog.url}</a> <br />
      {blog.likes} likes
      <button onClick={() => addLike(blog)}>like</button> <br />
      added by {blog.user.name}

      <div>
        <h2>comments</h2>
        <div>
          <form onSubmit={addComment}>
            <input name='comment' />
            <button type="submit">add comment</button>
          </form>
        </div>
        <ul>
          {blog.comments.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
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
  addCommentToBlog,
  setNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Blog)