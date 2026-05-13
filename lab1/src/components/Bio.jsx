import React from 'react'
import { Button } from './ui/button'

const Bio = () => {
  return (
    <div className='w-full rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-start'>
        <div className='md:w-1/3'>
          <h1 className='text-4xl font-bold text-black'>About Me</h1>
        </div>
        <div className='flex flex-col gap-4 md:w-2/3 max-w-2xl'>
            <p className='text-base leading-7 text-black/80'>Hello, I'm Kaite! I'm a web developer and designer based in Seattle, WA. I love creating beautiful, functional websites that provide great user experiences.Please check out my portfolio by clicking on the button below</p>
            <Button variant="default" className='w-fit'>Download Resume</Button>
        </div>
    </div>
  )
}

export default Bio