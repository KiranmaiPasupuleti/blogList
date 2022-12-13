// Write your JS code here
import './index.css'

const UserInfo = () => {
  const profileImg = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'
  return (
    <div className="user-info-container">
      <img src={profileImg} alt="profile" className="profile" />
      <h1>Wade Warren</h1>
      <p>Software developer at UK</p>
    </div>
  )
}

export default UserInfo
