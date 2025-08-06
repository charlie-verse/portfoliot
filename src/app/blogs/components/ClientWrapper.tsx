'use client'
import { motion } from 'framer-motion'

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='min-h-screen pt-20 max-sm:pt-24'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </main>
    )
}

export default ClientWrapper