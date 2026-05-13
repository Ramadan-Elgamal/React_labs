import React from 'react'

const Portfolio = () => {
  return (
  <div className='w-full min-h-[60dvh] p-8 md:p-12 flex flex-col gap-10 bg-white text-black'>
    <h1 className='font-serif text-5xl md:text-6xl text-start drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]'>Portfolio</h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto w-full'>
      {[
        { title: 'WEB DESIGN', dark: false },
        { title: 'MOBILE DESIGN', dark: true },
        { title: 'LOGO DESIGN', dark: false },
        { title: 'WEB APPLICATION\nDEVELOPMENT', dark: true },
        { title: 'MOBILE APPLICATION\nDEVELOPMENT', dark: false },
        { title: 'PWA\nDEVELOPMENT', dark: true },
      ].map((item) => (
        <div
          key={item.title}
          className={`h-40 md:h-44 shadow-lg flex items-center justify-center text-center px-4 ${item.dark ? 'bg-[#474747] text-white' : 'bg-[#a9a49a] text-white'}`}
        >
          <span className='text-sm border-b-2 border-b-white md:text-base font-medium leading-5 whitespace-pre-line tracking-wide'>
            {item.title}
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Portfolio