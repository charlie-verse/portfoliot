'use client';
import React, { useState } from 'react'
import { I_About } from '@/types/project'
import { bricolage_grotesque } from '@/utils/fonts'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge, Separator } from '@radix-ui/themes'
import Title from '@/components/ui/Title';


const About = () => {
    const [isMore, setIsMore] = useState<boolean>(false);
    return (
        <div className='w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='The Evolution of My Tech Journey' />

            <div className="w-full pl-36 pr-28 max-sm:px-2">

                {data.slice(0, 3).map((item, idx) => (
                    <div key={idx}>
                        <h1 className={`text-2xl max-sm:text-xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                        <div className="flex pl-2 mt-4">
                            <div className={`w-full flex flex-col gap-3`}>

                                {item.events.map((event, idx) => (
                                    <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                                        <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400' /></span>
                                        <span className='text-[15px] max-sm:text-sm dark:text-[#dfdede]'>{event}</span>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}

                <div className={`flex justify-center mt-5 ${isMore ? 'hidden' : 'block'}`}>
                    <Badge color="gray" variant="solid" highContrast onClick={() => setIsMore(true)} className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                        <span>See More</span>
                        <span className='!ml-[-3px] mt-[1px]'>
                            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
                        </span>
                    </Badge>
                </div>

                {
                    isMore && data.slice(3).map((item, idx) => (
                        <div key={idx}>
                            <h1 className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                            <div className="flex pl-2 mt-4">
                                <div className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}>

                                    {item.events.map((event, idx) => (
                                        <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                                            <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400' /></span>
                                            <span className='text-[15px] dark:text-[#dfdede]'>{event}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))
                }


                <div className={`flex justify-center mt-5 ${isMore ? 'block' : 'hidden'}`}>
                    <Badge color="gray" variant="solid" highContrast onClick={() => setIsMore(false)} className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                        <span>See Less</span>
                        <span className='!ml-[-3px] mt-[1px]'>
                            <ChevronDownIcon className='rotate-180 h-3 w-3 dark:!text-black !text-white shrink-0 text-muted-foreground transition-transform duration-200' />
                        </span>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default About


const data: I_About[] = [
    {
        year: 2025,
        events: [
            "Building something new this year—stay tuned. 🚀"
        ]
    },
    {
        year: 2024,
        events: [
            "Graduated with a B.E. in Computer Science from BMS College of Engineering.",
            "Published a research paper on road & animal accident prevention systems. 📄",
            "Transitioned from frontend intern to contractor at a Web3 incubator startup—delivered 30+ NFT client projects serving 80k+ users for minting & staking."
        ]
    },
    {
        year: 2023,
        events: [
            "Began Web3 journey as a moderator for Solana NFT projects → rose to community manager → project manager for 200k+ Discord users & $300k+/M in revenue.",
            "Found deep passion for coding while solving real problems in the Web3 space.",
            "Balanced college academics with delivering results in high-pressure startup environments. 💻"
        ]
    },
    {
        year: 2022,
        events: [
            "Built multiple AI-driven projects while actively exploring blockchain and decentralized technologies.",
            "Created a prototype for a smart system integrating IoT & AI for safety automation.",
        ]
    },
    {
        year: 2021,
        events: [
            "Deepened knowledge in core CS subjects while exploring Web2 and backend development.",
            "Started applying coding skills to small-scale freelance and personal projects. 💡"
        ]
    },
    {
        year: 2020,
        events: [
            "Cracked JEE Mains with 92 percentile but couldn’t clear JEE Advanced—redirected focus fully to computer science.",
            "Completed pre-university education in science stream. 🎯",
            "Joined BMS College of Engineering and began exploring Web development alongside academics.",
            "Learned the value of persistence and resilience during a pivotal academic year. "
        ]
    },
    {
        year: 2019,
        events: [
            "Became obsessed with solving C++ problems, consistently acing competitive coding challenges in college. 📚",
            "Developed logical thinking and problem-solving speed through countless hours of coding practice."
        ]
    },
    {
        year: 2018,
        events: [
            "Finished school and became obsessed with solving C++ problems, consistently acing competitive coding challenges. 📚",
            "Cybersecurity enthusiast, fascinated by ethical hacking and online security. 🔐",
            "Started experimenting with online CTFs and security challenges."
            
        ]
    },
    {
        year: 2016,
        events: [
            "First taste of tech curiosity through tinkering with gadgets and learning how things work—sparked the drive that shaped the rest of the journey. 💡"
        ]
    },
    {
        year: 2003,
        events: [
            "The year I was born. 👶🏼 🍼"
        ]
    },
];
