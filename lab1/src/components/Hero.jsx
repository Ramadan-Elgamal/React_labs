import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <div className='w-full h-[60dvh] p-12 bg-[url("/hero-bg.jpg")] bg-cover bg-center flex items-center justify-start'>
            <div className="content flex flex-col items-start justify-start h-full w-full gap-4">
                <h1 className='text-4xl font-bold text-white'>Kaite Reed</h1>
                <p className='text-lg text-white'>Web Developer & Designer</p>
                <Button variant="outline" className='text-white hover:bg-white hover:text-black'>
                    Contact Me
                </Button>
            </div>
        </div>
    )
}

export default Hero