import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'

const Navbar = () => {
  return (
    <nav className='textx-2xl font-medium'>
      <ul className='flex gap-12'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </nav>
  )
}

export default Navbar
