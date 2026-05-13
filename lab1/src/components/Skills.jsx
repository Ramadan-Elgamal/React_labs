import React from 'react'
import ProgressBar from './ProgressBar'

const Skills = () => {
  return (
    <div className='w-full p-12 bg-gray-500 flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl font-bold text-white'>Skills</h1>
        <p className='text-lg text-center text-white/80'>dOccaecat excepteur laboris laboris sunt irure sint laborum. Ea id dolor est occaecat. Do irure ullamco excepteur culpa pariatur enim culpa. Laborum duis consectetur do officia sunt elit labore mollit do quis sunt labore laboris. Pariatur ex ad in ea nostrud duis.</p>

        <div className='w-full flex justify-around gap-4'>
            <div>
                <h2 className='text-white border-b-2 border-b-white'>My Focus</h2>
                <ul className='text-white space-y-2 mt-2'>
                    <li>UI/Ux Design</li>
                    <li>Responsive Design</li>
                    <li>Mobile Design</li>
                    <li>Web Design</li>
                </ul>
            </div>
            <div>
                <div>
                    <ProgressBar language="React" value={75} />
                    <ProgressBar language="CSS" value={85} />
                    <ProgressBar language="HTML" value={90} />
                    <ProgressBar language="JavaScript" value={80} />
                    <ProgressBar language="Figma" value={70} />
                    <ProgressBar language="Adobe XD" value={65} />
                    <ProgressBar language="Photoshop" value={60} />
                    <ProgressBar language="Illustrator" value={55} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills