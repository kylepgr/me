import React from 'react'
import { motion } from 'framer-motion'
import WelcomeSection from './WelcomeSection'
import PopularItemsSection from './PopularItemsSection'
import Menu from './Menu'
import LocationSection from './LocationSection'
import NewStoreSection from './NewStoreSection'

export default function Home() {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <div>
      <motion.div
        className="tm-sections-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="tm-grid-welcome" variants={item}>
          <WelcomeSection />
        </motion.div>
        <motion.div className="tm-grid-popular" variants={item}>
          <PopularItemsSection />
        </motion.div>

        <motion.div className="tm-grid-newstore" variants={item}>
          <NewStoreSection />
        </motion.div>

        {/* Inline Menu so the site is one page */}
        <motion.div className="tm-grid-menu" variants={item}>
          <Menu />
        </motion.div>
        <motion.div className="tm-grid-location" variants={item}>
          <LocationSection />
        </motion.div>
      </motion.div>
    </div>
  )
}
