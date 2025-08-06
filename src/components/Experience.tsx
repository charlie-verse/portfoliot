'use client';
import Image from 'next/image';
import { MagicCard } from './ui/magic-card';
import { Link } from '@radix-ui/themes';
import { I_Experience } from '@/types/project';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import Title from './ui/Title';
import { useDarkMode } from '@/hooks/useDarkMode';
import { experienceData } from '@/utils/constant';

const Experience = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <span className='mb-3'>
                <Title title='Experience' />
            </span>
            {
                experienceData.map((exp: I_Experience, idx) => (
                    <MagicCard key={idx} className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none w-full !block" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                        <div className="px-5 py-4 max-sm:px-3">
                            <div className="flex items-start gap-4">
                                <Link href={exp.company_link} target='_blank' className="flex-shrink-0">
                                    <Image src={exp.company_logo} alt='company-logo' width={45} height={45} className='rounded-full' />
                                </Link>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-lg font-semibold leading-tight ${bricolage_grotesque}`}>{exp.job_title}</h3>
                                            <p className={`text-sm text-gray-600 dark:text-gray-400 mt-0.5 ${inter}`}>{exp.company_name}</p>
                                        </div>
                                        <span className={`text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap ${inter}`}>
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-3 ml-[61px] max-sm:ml-0">
                                {exp.description && <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>}
                                {exp.bullets && exp.bullets.length > 0 && (
                                    <ul className="space-y-2 mt-3">
                                        {exp.bullets.map((bullet, bulletIdx) => (
                                            <li key={bulletIdx} className="flex items-start gap-2">
                                                <span className="text-purple-500 dark:text-purple-400 mt-1 text-xs flex-shrink-0">▸</span>
                                                <span className="text-gray-600 dark:text-gray-400 leading-relaxed text-[13px] max-sm:text-xs">
                                                    {bullet}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </MagicCard>
                ))
            }
        </div>
    );
};

export default Experience;
