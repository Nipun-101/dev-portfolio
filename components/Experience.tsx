import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { LinkPreview } from './ui/LinkPreview'


const Experience = () => {
  return (
    <div className='py-20' id="experience">
        <h1 className='heading'>
        My<span className='text-purple'> work experience</span>
        </h1>

        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>

        {
            workExperience.map((exp) => (
                <Button 
                    key={exp.id}
                    duration={Math.floor(Math.random()*10000 + 10000)}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-auto'
                >
                    <div className='flex lg:flex-row flex-col
                    lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img 
                            src={exp.thumbnail}
                            alt={exp.thumbnail}
                            className='lg:w-32 md:w-20 w-16'
                        />
                        <div className='lg:ms-5'>
                            <h1 className='
                            text-start text-xl md:text-2xl font-bold'>
                                {exp.title}
                                

                            </h1>
                            <p className='
                            text-start text-white-100 mt-3 font-semibold'>
                                {exp.desc}{exp?.companyTitle && 
                               <LinkPreview url={exp.companyWebsite} className="font-bold underline ">
                                    {exp.companyTitle}
                                </LinkPreview>}
                            </p>
                        </div>
                    </div>
                </Button>
            ))

        }

            <Button 
                    key={'cv'}
                    duration={Math.floor(Math.random()*10000 + 10000)}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-auto'
                >
                    <div className='flex lg:flex-row flex-col
                    lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img 
                            src={'/exp3.svg'}
                            alt={'/exp3.svg'}
                            className='lg:w-32 md:w-20 w-16'
                        />
                        <div className='lg:ms-5'>
                            <h1 className='
                            text-start text-xl md:text-2xl font-bold'>
                                {'Download my CV '}<a href={'/nipun-deleep-cv-2024.pdf'} download="nipun-deleep-cv-2024" className='text-blue-600 cursor-pointer underline'>{'here'}</a>
                            </h1>
                            <p className='
                            text-start text-white-100 mt-3 font-semibold'>
                                {"Apart from web application development, I have hands on experience in Industrial automation (IIOT), Here's my Full details."}
                            </p>
                        </div>
                    </div>
                </Button>
        
        </div>

    </div>
  )
}

export default Experience
