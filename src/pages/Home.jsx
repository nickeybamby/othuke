import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Books from '../components/Books'
import Marquee from '../components/FastMarquee'
import Contact from '../components/Contact'

const Home = ({ theme }) => {
  return (
    <>
        <Hero />
        <Skills />
        <Books />
        <Marquee />
        <Contact />
    </>
  )
}

export default Home