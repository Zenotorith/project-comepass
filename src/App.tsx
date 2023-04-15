import Contact from './components/Contact'
import Courses from './components/Courses'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Solution from './components/Solution'
import About from './components/About'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
