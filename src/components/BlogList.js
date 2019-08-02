import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'

const BlogList = (props) => {

  /*
    <Blog key={blog.id} blog={blog}
      addLike={() => addLikeOf(blog.id)}
      delBlog={() => delBlogOf(blog.id, blog)}
      currentUsername={props.user.username}
    />
  */

  return (
    <div>
      {props.blogs
        .sort((a, b) => b.likes - a.likes)
        .map(blog =>
          <Blog key={blog.id} blog={blog} />
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
)(BlogList)