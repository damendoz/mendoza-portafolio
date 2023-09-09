/* eslint-disable react/no-unescaped-entities */
//React
import { useState } from 'react'

//icons
import 'boxicons'

//css
import './App.css'

//components
import { NavMobile } from './components/nav-mobile'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const HandleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const line1 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine1' : 'div__menu--line1'
  const line2 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine2' : 'div__menu--line2'
  const line3 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine3' : 'div__menu--line3'

  return (
    <main className='app__main'>
      <header className='main__header'>
        <nav className='header__nav'>
          <h2 className='nav__h2'>Dani-dev</h2>
          <ul className='nav__ul'>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">PROJECTS</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
          <div className='nav__menu' onClick={HandleClickMenu}>
            <div className={line1}></div>
            <div className={line2}></div>
            <div className={line3}></div>
          </div>
        </nav>
      </header>
      <NavMobile menuOpen={menuOpen} />
      <section className='app__section'>
        <div className='section__div'>
          <div className='div__presentation'>
            <h1>
              Front-End Web Developer.
            </h1>
            <p className='intro-p'>Hi, I'm
              <span className='h1__span--name'> Daniel</span>
              .
              <br />
              A passionate Developer from Venezuela.
            </p>
            <ul className='div__presentation--ul'>
              <li><a href="https://www.linkedin.com/in/daniel-mendoza-985352246/">
                <i className='bx bx-md bxl-linkedin-square'></i>
              </a></li>
              <li><a href="https://github.com/damendoz">
                <i className='bx bx-md bxl-github'></i>
              </a></li>
            </ul>
          </div>
          <div className='section__div--img'></div>
        </div>
        <div className='section__div--skills'>
          <div className='div__mySkills--title'>
            <h3>My Skills</h3>
          </div>
          <div className='divv__mySkills--content'>
            <div className='div__mySkills--a'></div>
            <div className='div__mySkills--b'></div>
            <div className='div__mySkills--c'></div>
            <div className='div__mySkills--d'></div>
            <div className='div__mySkills--e'></div>
          </div>
        </div>
      </section>
      <aside className='app__aside'>
      </aside>
      <footer className='app_footer'>
      </footer>
    </main>
  )
}

export default App
