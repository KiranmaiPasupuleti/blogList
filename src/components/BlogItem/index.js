// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="list-container">
      <div className="title-date">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p className="para">{description}</p>

      <hr />
    </li>
  )
}

export default BlogItem
