import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Books from '../components/Books'

const Home = ({ theme }) => {
  return (
    <>
        <Hero />
        <Skills />
        <Books />
    </>
  )
}

export default Home