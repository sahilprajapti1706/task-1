import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PostSection from './components/PostSection'
import { useState } from 'react'
import { UserProvider } from './context/UserContext'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    <UserProvider>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Hero/>
      <PostSection isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </UserProvider>
    </>
  )
}

export default App
