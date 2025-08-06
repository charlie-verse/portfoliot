import { Blog } from '@/types/project'
import BlogCard from './BlogCard'
import Title from '@/components/ui/Title'
import { prisma } from '@/lib/prisma'

// Fetch blogs directly from the database in server component
export async function getBlogs() {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true
            }
        });
        
        // Convert dates to strings for type compatibility
        return blogs.map(blog => ({
            ...blog,
            createdAt: blog.createdAt.toISOString()
        }));
    } catch (error) {
        console.error(`Error while fetching blogs from database: ${error}`);
        return [];
    }
}

async function BlogList() {
    const blogs = await getBlogs();

    if (!blogs || blogs.length === 0) {
        return (
            <div className='w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col gap-6 items-center mt-4 pb-8'>
                <Title title='Blogs' />
                <div className='text-center py-20'>
                    <p className='text-gray-500 dark:text-gray-400'>No blogs found. Check back later!</p>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col gap-6 items-center mt-4 pb-8 max-sm:overflow-hidden'>
            <Title title='Blogs' />
            {blogs.map((blog: Blog, idx: number) => (
                <BlogCard
                    key={idx}
                    title={blog.title}
                    createdAt={blog.createdAt}
                    content={blog.content}
                    id={blog.id}
                />
            ))}
        </div>
    )
}

export default BlogList