import React from 'react'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experiencie/Experience.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import News from './Components/News/News.jsx'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <News />
      <Contact />
      <Footer />
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </>
    
  )
}

export default App