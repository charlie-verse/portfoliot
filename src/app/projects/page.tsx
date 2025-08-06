'use client'
import React from 'react'
import ProjectCardList from './components/ProjectCardList';
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <main className='min-h-screen pt-20'>
      <motion.div 
        initial={{opacity: 0, y: 10}} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{opacity: 0}} 
        transition={{duration: 0.3}}
      >
        <ProjectCardList />
      </motion.div>
    </main>
  )
}

export default Projects