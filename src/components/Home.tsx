import { motion } from 'framer-motion'

const Home = () => {
  return (
    <main>
      <div className='my-96 p-1'>
        <h1 className='text-6xl text-center lg:text-right lg:textx-9xl'>Happy Pickle</h1>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2>Design</h2>
          <h2>Company</h2>
          <h2>2023</h2>
        </div>
        <div>
          <h3>This pickle goona make you smile.</h3>
          <h3>Veinz designs to make you happy.</h3>
          <h3>Click contact for cool transition.</h3>
        </div>
      </div>
    </main>
  )
}

export default Home
