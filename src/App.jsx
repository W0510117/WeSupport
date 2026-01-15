import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import AccountManagement from './pages/AccountManagement'
import Settings from './pages/Settings'
import User from './pages/User'
import { AuthProvider } from './contexts/AuthContext'
import { SearchProvider } from './contexts/SearchContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/account" element={<AccountManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user/:userId" element={<User />} />
          </Route>
        </Routes>
      </SearchProvider>
    </AuthProvider>
  )
}

export default App
