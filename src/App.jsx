//React
import { useState } from 'react'

//css
import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const HandleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const line1 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine1' : 'div__menu--line1'
  const line2 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine2' : 'div__menu--line2'
  const line3 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine3' : 'div__menu--line3'

  const navMobile = menuOpen ? 'nav__mobile active' : 'nav__mobile'

  return (
    <main className='app__main'>
      <header className='main__header'>
        <nav className='header__nav'>
          <h2 className='nav__h2'>Dani-dev</h2>
          <ul className='nav__ul'>
            <li><a href>HOME</a></li>
            <li><a href>ABOUT</a></li>
            <li><a href>PROJECTS</a></li>
            <li><a href>CONTACT</a></li>
          </ul>
          <div className='nav__menu' onClick={HandleClickMenu}>
            <div className={line1}></div>
            <div className={line2}></div>
            <div className={line3}></div>
          </div>
        </nav>
      </header>
        <nav className={navMobile}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      <section className='app__section'>
      </section>
      <aside className='app__aside'>
      </aside>
      <footer className='app_footer'>
      </footer>
    </main>
  )
}

export default App
