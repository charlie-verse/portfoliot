import { I_Education, I_Experience } from "@/types/project";

export const experienceData: I_Experience[] = [
    {
        company_link: "https://www.adobe.com/",
        company_logo: "/adobe.png",
        company_name: "Adobe",
        duration: "2024 - 2025",
        job_title: "Add-On Developer",
        description: "",
        bullets: [
            "Developed and maintained Adobe Creative Cloud add-ons using CEP (Common Extensibility Platform) and UXP frameworks",
            "Collaborated with design teams to implement user-friendly interfaces for Photoshop and Illustrator extensions",
            "Optimized plugin performance resulting in 40% faster load times and improved user experience for 10K+ users"
        ]
    },
    {
        company_link: "https://inagiffy.news/",
        company_logo: "/Inagiffy.png",
        company_name: "Inagiffy",
        duration: "2023 - 2024",
        job_title: "Full Stack Developer",
        description: "",
        bullets: [
            "Built and deployed scalable news aggregation platform using Next.js, Node.js, and PostgreSQL",
            "Implemented real-time data processing pipeline handling 100K+ articles daily with Redis caching",
            "Led frontend development initiatives, improving site performance metrics by 35% and SEO rankings"
        ]
    }
    // ,
    // {
    //     company_link: "https://x.com/fardeentwt",
    //     company_logo: "/freelance-icon.webp",
    //     company_name: "building full stack apps",
    //     duration: "2024 - present",
    //     job_title: "Freelance",
    //     description: "",
    //     bullets: [
    //         "Delivered 15+ custom web applications for clients across e-commerce, SaaS, and education sectors",
    //         "Specialized in React/Next.js frontend development with TypeScript and modern UI libraries",
    //         "Maintained 100% client satisfaction rate with on-time project delivery and post-launch support"
    //     ]
    // },
    // {
    //     company_link: "https://x.com/fardeentwt",
    //     company_logo: "/stealth-startup.jpeg",
    //     company_name: "Stealth Startup",
    //     duration: "Feb 2024 - June 2024",
    //     job_title: "Full Stack Development - TA",
    //     description: "",
    //     bullets: [
    //         "Architected microservices-based backend infrastructure using Node.js and Docker containers",
    //         "Mentored junior developers on best practices for React component design and state management",
    //         "Implemented CI/CD pipelines reducing deployment time by 60% and ensuring zero-downtime releases"
    //     ]
    // }
];

export const educationData: I_Education[] = [
    {
        institute_link: "https://www.uok.ac.in/",
        institute_logo: "/uok.gif",
        course_title: "Bachelors of Computer Application",
        ending_date: "Expected July 2025",
        institute_name: "University of Kota",
        cgpa: 8.5,
        description: ""
    }
] 