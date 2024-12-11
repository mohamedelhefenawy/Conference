import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Conference from './components/Conference/Conference'
import Ended from './components/Ended/Ended'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Conference></Conference>
      <Ended></Ended>
      <Contact></Contact>
    </div>
  )
}

export default App
