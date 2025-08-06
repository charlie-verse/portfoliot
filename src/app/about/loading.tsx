export default function Loading() {
    return (
        <div className='w-full flex justify-center mt-20'>
            <div className='w-3/4 max-lg:w-full px-20 max-sm:w-full max-sm:px-5 flex flex-col mt-4 pb-8'>
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />
                
                <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 mb-2" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/6" />
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 space-y-4">
                    <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
