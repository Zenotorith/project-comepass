import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <img className='w-24' src={logo} alt='logo' />
        </a>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2023 Comepass
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a className='text-gray-500' href='https://www.facebook.com/ieltscomepass' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faFacebook} /> 
          </a>
          <a className='ml-3 text-gray-500' href='https://www.youtube.com/@comepassacademy' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faYoutube} />
          </a>
          <a className='ml-3 text-gray-500' href='https://www.tiktok.com/@xunlin2425' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faTiktok} />
          </a>
        </span>
      </div>
    </footer>
  )
}
