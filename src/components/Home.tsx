import background from '../assets/bg.jpg'
import courses from '../assets/comepass-courses.jpg'

const Home = () => {
  return (
    <section
      className='w-full h-screen bg-no-repeat bg-center bg-cover flex flex-col'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center backdrop-brightness-50'>
        <h1 className='text-3xl text-white font-bold font-[Roboto]'>
          Welcome to <span className='text-[#2694d1]'>Come</span>
          <span className='text-[#facd0e]'>pass</span>
        </h1>
        <p className='text-3xl text-white font-[Roboto] mt-4'>Improve your English Skills</p>
        <div className='px-4'>
          <img className='mt-10 rounded-xl' width="800" src={courses} alt='Course' />
        </div>
      </div>
    </section>
  )
}

export default Home
