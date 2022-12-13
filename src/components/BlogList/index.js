// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogsList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogsList
