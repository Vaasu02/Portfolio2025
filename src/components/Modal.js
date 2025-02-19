import React from 'react'

const Modal = ({isVisible,onClose,children}) => {

    if(!isVisible) return null;

    const handleClose=(e)=>{
        if(e.target.id==='wrapper') onClose();
    }

  
  return (
    <div id='wrapper' className='fixed inset-0 bg-black md:p-6 bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
        <div className='w-[600px] h-[540px] sm:mt-4 flex flex-col'>
            <button className='text-white text-xl z-20 place-self-end cursor-pointer' onClick={()=>onClose()}>X</button>
            <div className='bg-white p-2 rounded'>{children}</div>

        </div>

    </div>
  )
}

export default Modal