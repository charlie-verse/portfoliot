'use client'

import { bricolage_grotesque } from '@/utils/fonts';
import Link from 'next/link';
import { MagicCard } from '@/components/ui/magic-card';
import { useDarkMode } from '@/hooks/useDarkMode';

type Blog = {
    id?: string,
    title: string,
    content?: unknown,
    image_public_id?: string,
    author?: string
    createdAt?: string
}

export default function HomeRouteBlogCards({ title, id, createdAt }: Blog) {
    const { isDarkMode } = useDarkMode();
    
    return (
        <Link href={`/blogs/${id}`} className="w-full" prefetch={true}>
            <MagicCard 
                className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none w-full my-3" 
                gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
            >
                <div className={`flex flex-col justify-start items-start w-full px-5 py-4 ${bricolage_grotesque}`}>
                    <h2 className={`text-start text-lg font-medium text-black dark:text-white`}>{title}</h2>
                    <p className='text-xs text-black/60 dark:text-white/60 mt-1'>
                        {new Date(createdAt || '').toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </MagicCard>
        </Link>
    )
}
