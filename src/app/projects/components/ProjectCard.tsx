'use client'

import { MagicCard } from '@/components/ui/magic-card'
import { useDarkMode } from '@/hooks/useDarkMode'
import { Project } from '@/types/project'
import { bricolage_grotesque, inter } from '@/utils/fonts'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { Badge, Link } from '@radix-ui/themes'
import Image from 'next/image'
import { parseHighlightedText } from '@/utils/parseHighlightedText'

const ProjectCard = (props: Project) => {
    const { isDarkMode } = useDarkMode()
    return (
        <MagicCard className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none w-full !block" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
            <div className="px-5 py-4 max-sm:px-3">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image src={props.logo} alt='project-logo' width={45} height={45} className='rounded-lg' />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1 min-w-0">
                                <Link href={props.link ? props.link : props.source} target='_blank' underline='none'>
                                    <h3 className={`text-lg font-semibold leading-tight hover:underline ${bricolage_grotesque}`}>{props.title}</h3>
                                </Link>
                                <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 ${inter}`}>{parseHighlightedText(props.description)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-3 ml-[61px] max-sm:ml-0">
                    {props.bullets && props.bullets.length > 0 && (
                        <ul className="space-y-2 mt-3">
                            {props.bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx} className="flex items-start gap-2">
                                    <span className="text-purple-500 dark:text-purple-400 mt-1 text-xs flex-shrink-0">▸</span>
                                    <span className="text-gray-600 dark:text-gray-400 leading-relaxed text-[13px] max-sm:text-xs">
                                        {parseHighlightedText(bullet)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {
                            props.techStack?.map((tech, idx) => (
                                <Badge key={idx} color="gray" variant="outline" highContrast className={`text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black ${bricolage_grotesque}`}>
                                    {tech}
                                </Badge>
                            ))
                        }
                    </div>
                    
                    <div className='mt-3 flex gap-2'>
                        {
                            props.link && (
                                <Link href={props.link} target='_blank'>
                                    <Badge color="gray" variant="solid" highContrast className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}>
                                        <GlobeIcon width={11} height={11} /> Website
                                    </Badge>
                                </Link>
                            )
                        }
    
                        <Link href={props.source} target='_blank'>
                            <Badge color="gray" variant="solid" highContrast className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}>
                                <GitHubLogoIcon width={11} height={11} /> Source
                            </Badge>
                        </Link>
                    </div>
                </div>
            </div>
        </MagicCard>
    )
}

export default ProjectCard