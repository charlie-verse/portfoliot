'use client'
import React from 'react'
import About from './components/About'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <main className='min-h-screen pt-20'>
      <motion.div 
        initial={{opacity: 0, y: 10}} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{opacity: 0}} 
        transition={{duration: 0.3}}
      >
        <About />
      </motion.div>
    </main>
  )
}

export default page