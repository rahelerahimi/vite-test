import React from 'react'
import './beautiful.css'

const BeautifulIran = () => {
  return (
    <div className='parent-bu-iran   '>
      <div className='absolute-bu'>beautiful iran</div>

      <div className='flex-none w-[40%]'>
        <div>
          <figure className='relative'>
            <img
              src='/images/image-24.jpg'
              alt=''
              className='w-[100%]  h-[290px]'
            />
            <div className='pusdash'></div>

            <p className='text-img after:absolute  after:bottom-[20%] after:left-[2em] after:h-[10px] after:w-[65%] after:bg-[blue] after:z-[-1]'>
              the name yazd
            </p>
          </figure>
        </div>

        <div className='mt-5'>
          <figure className='relative'>
            <img
              src='/images/image-23.jpg'
              className=' w-[100%] h-[200px]'
              alt=''
            />
            <div className='pusdash'></div>
            <p className='text-img after:absolute  after:bottom-[20%] after:left-[8px] after:h-[10px] after:w-[95%] after:bg-[blue] after:z-[-1] '>
              from south gambroon
            </p>
          </figure>
        </div>
      </div>

      <div className='grow ml-5 '>
        <figure className='relative'>
          <img src='/images/image-26.jpg' alt='' className='w-[100%]  ' />
          <div className='pusdash'></div>
          <p className='text-img after:absolute  after:bottom-[20%] after:left-[0.9em] after:h-[10px] after:w-[90%] after:bg-[blue] after:z-[-1]'>
            the name of this house shiraz
          </p>
        </figure>
      </div>
    </div>
  )
}

export default BeautifulIran
