import { useState } from 'react'
import { Link } from 'react-router-dom'

function AccountManagement() {
  const [userInfo, setUserInfo] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    createdAt: '2026-01-01'
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    // Add save logic here
    console.log('Account updated:', userInfo)
    setIsEditing(false)
  }

  return (
    <div className="account-management">
      <h1>Account Management</h1>
      
      <div className="account-info">
        <div>
          <label>Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
            />
          ) : (
            <span>{userInfo.username}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          ) : (
            <span>{userInfo.email}</span>
          )}
        </div>
        <div>
          <label>Account Created:</label>
          <span>{userInfo.createdAt}</span>
        </div>
      </div>

      <div className="actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save Changes</button>
            <button onClick={handleEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit Account</button>
        )}
      </div>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}

export default AccountManagement
