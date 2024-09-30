import React from 'react'
import { CircularText } from './Icons'
import Modal from "@/components/Modal";
import { useState } from 'react';

const HireMe = () => {
  const [showModal,setShowModal] =useState(false);
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
        <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
            <CircularText className={"p-1 m-1 fill-dark animate-spin-slow dark:fill-light"}/>
            <button  onClick={()=>setShowModal(true)}  className='flex z-10 items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
            
            dark:bg-light dark:text-dark dark:hover:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px] 
            
            '>
            Hire Me
            </button>
        </div>
        <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
          <div className='py-6 px-6 lg:px-8 text-left'>
            <h3 className='mb-4 text-xl font-medium text-gray-900'>
              Let&apos;s Connect
            </h3>
            <form className='space-y-6' action="https://api.web3forms.com/submit" method="POST">
              <div>
                <label for="username" className='block mb-2 text-sm font-medium text-gray-900'>
                  Enter Username
                </label>
                <input type="hidden" name="access_key" value="f5027db0-12a2-4a31-bb59-27101d629232"></input>
                <input type='text' name='username' id='name' className='bg-gray-50 border-gray-300 text-gray-900 test-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border '
                placeholder='john Snow'
                required
                />
                
              </div>
              <div>
                <label for="email" className='block mb-2 text-sm font-medium text-gray-900'>
                    Enter email
                </label>
                <input
                type='email'
                name='email'
                id='email'
                placeholder='yourname@gmail.com'
                className='bg-gray-50 border-gray-300 text-gray-900 test-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border '
                required
                />

              </div>
              <div>
                <label for="message" className='block mb-2 text-sm font-medium text-gray-900'>
                    Message
                </label>
                <textarea
                
                name='message'
                id='message' rows={6}
                placeholder='Want to work with you'
                className='bg-gray-50 border-gray-300 text-gray-900 test-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border '
                
                ></textarea>

              </div>
              <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:block'>
                Send
              </button>
              
            </form>

          </div>
        </Modal>
    </div>
  )
}

export default HireMe