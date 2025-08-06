'use client'

import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts';
import { formatDate } from '@/utils/formatdate';
import Link from 'next/link';
import { calculateReadingTime } from '@/utils/blogReadingTime';
import { MagicCard } from '@/components/ui/magic-card';
import { useDarkMode } from '@/hooks/useDarkMode';

type Blog = {
    id?: string,
    title: string,
    content?: unknown,
    image_public_id?: string,
    author?: string
    createdAt: string
}

const BlogCard = ({ title, createdAt, content, id }: Blog) => {
    const readingTime = calculateReadingTime(content as string);
    const { isDarkMode } = useDarkMode();

    return (
        <Link href={`/blogs/${id}`} prefetch={true}>
            <MagicCard 
                className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none w-[50vw] max-sm:w-full" 
                gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
            >
                <div className={`flex gap-5 py-4 px-6 ${bricolage_grotesque}`}>
                    <div className="w-full">
                        <h2 className='text-[26px] max-sm:text-base font-extrabold dark:text-white text-black break-words'>
                            {title}
                        </h2>
                        
                        <div 
                            className="line-clamp-2 max-sm:w-[85vw] dark:text-[#dcdcdc] text-[#6B6B6B] max-sm:mt-2 text-[15px] mt-2" 
                            dangerouslySetInnerHTML={{ __html: content as TrustedHTML }}
                        />
                        
                        <div className="text-xs space-x-4 mt-4 flex items-center">
                            <span className='dark:text-[#dcdcdc] text-[#6B6B6B] font-semibold'>
                                {formatDate(createdAt)}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className='dark:text-[#dcdcdc] text-[#6B6B6B] font-semibold'>
                                {readingTime}
                            </span>
                        </div>
                    </div>
                </div>
            </MagicCard>
        </Link>
    )
}

export default BlogCard;