import background from '../assets/bg.jpg'

const Contact = () => {
  return (
    <section
      className='bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center font-[Roboto] '
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 pt-[5%]'>
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-5 items-center'>
          <div className='md:w-1/2 px-8 md:px-16 text-center'>
            <h2 className='font-bold text-2xl text-[#2694d1]'>Liên hệ với chúng tôi</h2>
            <p className='text-xs mt-4 text-[#2694d1]'>Hãy cho chúng tôi biết bạn cần gì</p>

            <form action='' className='flex flex-col gap-4'>
              <input className='p-2 mt-8 rounded-xl border' type='text' name='name' placeholder='Họ tên...' />
              <input className='p-2 rounded-xl border w-full' type='email' name='email' placeholder='Email...' />
              <input className='p-2 rounded-xl border w-full' type='text' name='subject' placeholder='Tiêu đề...' />
              <textarea
                className='p-2 rounded-xl border w-full resize-none h-[200px]'
                name='content'
                placeholder='Nội dung...'
              />
              <button className='bg-[#2694d1] rounded-xl text-white py-2 hover:scale-105 duration-300'>
                Gửi liên hệ
              </button>
            </form>
          </div>

          <div className='md:block hidden w-1/2 '>
            <img
              className='rounded-2xl'
              src='https://images.unsplash.com/photo-1581668181500-08c6a6e006f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
