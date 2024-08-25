import React from 'react'

import { Article, Navbar, Brand, Cta } from './components';
import { Footer, Header, Possibilities, Feature, WhatGPT3, Blog } from './containers';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibilities />
      <Cta />
      <Blog />
      <Footer />


    </div>
  )
}

export default App
