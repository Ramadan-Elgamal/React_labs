import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className='w-full bg-[#16120f] text-white py-8 px-8 md:px-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold tracking-wide'>GET IN TOUCH</h2>
          <div className='space-y-2 text-sm text-white/80'>
            <div className='flex items-center gap-3'>
              <span className='inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/70 text-[10px] font-bold'>✉</span>
              <span>kr12@hotmail.com</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/70 text-[10px] font-bold'>☎</span>
              <span>717-555-1234</span>
            </div>
          </div>
        </div>

        <div className='flex justify-start md:justify-center'>
          <Button variant='outline' className='border-white/70 bg-transparent text-white hover:bg-white hover:text-[#16120f] px-8 py-6'>
            CONTACT ME
          </Button>
        </div>

        <div className='space-y-4 md:text-right'>
          <div className='flex items-center justify-start md:justify-end gap-3'>
            <span className='inline-flex h-7 w-7 items-center justify-center bg-white text-[#16120f] text-sm font-bold'>in</span>
            <span className='inline-flex h-7 w-7 items-center justify-center bg-white text-[#16120f] text-sm font-bold'>f</span>
            <span className='inline-flex h-7 w-7 items-center justify-center bg-white text-[#16120f] text-sm font-bold'>t</span>
          </div>
          <p className='text-sm text-white/80'>Copyright © 2019 KR</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer