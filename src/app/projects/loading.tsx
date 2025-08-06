import { MagicCard } from '@/components/ui/magic-card';

export default function Loading() {
    return (
        <div className='w-full flex flex-col items-center px-20 max-lg:px-4 max-sm:px-2 mt-20'>
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />
            
            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:gap-3 w-full px-40 max-lg:px-10 max-sm:px-4'>
                {[...Array(6)].map((_, i) => (
                    <MagicCard 
                        key={i} 
                        className="h-[200px] dark:shadow-2xl !bg-transparent border-none animate-pulse"
                        gradientColor="rgba(197, 241, 241, 0.1)"
                    >
                        <div className="p-5 space-y-3">
                            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
                            <div className="flex gap-2 mt-4">
                                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                            </div>
                        </div>
                    </MagicCard>
                ))}
            </div>
        </div>
    );
}
