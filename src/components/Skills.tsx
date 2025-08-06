"use client"

import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts'
import Title from './ui/Title'
import { motion } from 'framer-motion'
import { useDarkMode } from '@/hooks/useDarkMode'
import { SkillButton } from './ui/skill-button'

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
      <Title title='Skills' />

      <motion.div 
        className="flex w-full flex-row gap-3 max-sm:gap-2 mt-6 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {
          data.map((skill, idx) => (
            <motion.div key={idx} variants={item}>
              <SkillButton 
                gradientColor={isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.5)'}
                className={bricolage_grotesque}
              >
                {skill}
              </SkillButton>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}


export default Skills;

const data: string[] = [
  "Python", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB", "MySQL",
  "Git", "AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Ansible", "Prometheus",
  "HuggingFace", "LangChain", "RAG", "LLM", "AI Agents"
];
