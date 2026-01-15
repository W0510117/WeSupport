import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function User() {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user data
    // In a real app, you would fetch from an API
    setTimeout(() => {
      setUser({
        id: userId,
        username: `User_${userId}`,
        email: `user${userId}@example.com`,
        bio: 'This is a user profile',
        joinDate: '2026-01-01',
        followers: Math.floor(Math.random() * 1000),
        following: Math.floor(Math.random() * 500)
      })
      setLoading(false)
    }, 500)
  }, [userId])

  if (loading) {
    return <div className="user-profile"><p>Loading user profile...</p></div>
  }

  if (!user) {
    return <div className="user-profile"><p>User not found</p></div>
  }

  return (
    <div className="user-profile">
      <h1>{user.username}</h1>
      
      <div className="profile-info">
        <div>
          <label>User ID:</label>
          <span>{user.id}</span>
        </div>
        <div>
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div>
          <label>Bio:</label>
          <span>{user.bio}</span>
        </div>
        <div>
          <label>Joined:</label>
          <span>{user.joinDate}</span>
        </div>
        <div>
          <label>Followers:</label>
          <span>{user.followers}</span>
        </div>
        <div>
          <label>Following:</label>
          <span>{user.following}</span>
        </div>
      </div>

      <div className="actions">
        <button>Follow User</button>
        <button>Send Message</button>
      </div>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}

export default User
