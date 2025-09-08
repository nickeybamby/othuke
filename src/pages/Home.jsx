import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Books from '../components/Books'
import Marquee from '../components/FastMarquee'

const Home = ({ theme }) => {
  return (
    <>
        <Hero />
        <Skills />
        <Books />
        <Marquee />
    </>
  )
}

export default Home