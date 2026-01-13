import { useState } from 'react'
import { Link } from 'react-router-dom'

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en',
    emailUpdates: true
  })

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    })
  }

  const handleLanguageChange = (e) => {
    setSettings({
      ...settings,
      language: e.target.value
    })
  }

  const handleSave = () => {
    // Add save logic here
    console.log('Settings saved:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="settings">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h2>Preferences</h2>
        
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
            />
            Dark Mode
          </label>
        </div>

        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.emailUpdates}
              onChange={() => handleToggle('emailUpdates')}
            />
            Email Updates
          </label>
        </div>

        <div className="setting-item">
          <label>
            Language:
            <select value={settings.language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </label>
        </div>
      </div>

      <button onClick={handleSave}>Save Settings</button>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}

export default Settings
