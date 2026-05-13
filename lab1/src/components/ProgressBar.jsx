import React from 'react'
import  {Progress}  from './ui/progress'
const ProgressBar = ({ language, value }) => {
    return (
        <div className="bar flex items-center">
            <div className='w-32 h-7 shrink-0'>
                <h3 className='font-bold text-black bg-gray-300 text-center w-full h-full flex items-center justify-center'>{language}</h3>
            </div>
            <Progress value={value} className='w-48 h-7' />
        </div>
    )
}

export default ProgressBar