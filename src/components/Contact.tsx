import React, { useState } from 'react'
import axios from 'axios'
import Form from '../types'

import background from '../assets/bg.jpg'

const Contact = () => {
  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://request-form-comepass.vercel.app/api/form', formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-comepass-key': 'aGVsbG9jb21lcGFzczIwMjM='
        }
      })
      console.log('Post submitted successfully!', response.data)
      setFormData({ name: '', email: '', phone: '', description: '' }) // Clear the form
    } catch (error) {
      console.error(error)
    }
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

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

            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
              <input
                className='p-2 mt-8 rounded-xl border w-full outline-none'
                type='text'
                name='name'
                id='name'
                value={formData.name}
                placeholder='Họ tên...'
                onChange={changeHandler}
                required
              />
              <input
                className='p-2 rounded-xl border w-full outline-none'
                type='email'
                name='email'
                id='email'
                value={formData.email}
                placeholder='Email...'
                onChange={changeHandler}
                required
              />
              <input
                className='p-2 rounded-xl border w-full outline-none'
                type='tel'
                name='phone'
                id='phone'
                value={formData.phone}
                placeholder='Nhập số điện thoại...'
                maxLength={10}
                onChange={changeHandler}
                required
              />
              <textarea
                className='p-2 rounded-xl border w-full resize-none h-[200px] outline-none'
                name='description'
                id='description'
                value={formData.description}
                placeholder='Nội dung...'
                onChange={changeHandler}
                required
              />
              <button className='bg-[#2694d1] rounded-xl text-white py-2 hover:scale-105 duration-300' type='submit'>
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
