import { useState } from 'react'
//icons
import 'boxicons'

//css
import './App.css'

//components
import { NavPc } from './components/nav-pc'
import { DarkMode } from './components/dark-mode'

function App() {

  const [darkModeActive, setDarkModeActive] = useState(false)

  const classNameFirstSection = darkModeActive ? 'app__section dark__mode--ligth' : 'app__section'

  const classNameAbout = darkModeActive ? 'app__section--about dark__mode' : 'app__section--about'

  const classNameProjects = darkModeActive ? 'app__section--projects dark__mode--ligth' : 'app__section--projects'

  const classNameContact = darkModeActive ? 'app_footer dark__mode' : 'app_footer'

  return (
    <main className='app__main'>
      <NavPc darkModeActive={darkModeActive} />
      <section id='home' className={classNameFirstSection}>
        <div className='section__div' >
          <div className='div__presentation'>
            <h1>
              Front-End Web Developer.
            </h1>
            <p className='intro-p'>Hi, I'm
              <span className='h1__span--name'> Daniel Mendoza</span>
              .
              <br />
              A passionate Developer from Venezuela.
            </p>
            <ul className='div__presentation--ul'>
              <li><a href="https://www.linkedin.com/in/daniel-mendoza-299a06167">
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
            <div className='div__mySkills--b'>
              <i className='bx bxl-react' style={{ color: '#61dafb' }}  ></i>
            </div>
            <div className='div__mySkills--c'></div>
            <div className='div__mySkills--d'>
              <i className='bx bxl-css3' style={{ color: '#1720fd' }}  ></i>
            </div>
            <div className='div__mySkills--e'></div>


          </div>
        </div>
      </section>
      <section id='about' className={classNameAbout}>
        <div className='section__div--title'>
          <h2>About Me</h2>
        </div>
        <div className='section__div--content'>
          <div className='div__content--text'>
            <div className='div__content--img'></div>
            <h3>An enthusiast Web Developer 💻</h3>
            <p>
              As a <span>Front-End</span> Developer, I turn <span>ideas</span> into <span>code</span>. I am capable of handling any obstacles,
              challenges or problems.
              Being a focused and disciplined person make me a wise choice. Using <span>React/Next</span> for the Frontend,
              i can able to make attractive, interactive, useful and <span>professional</span> websites.
              I think being in peace with myself is a very important aspect when it comes to <span>working</span> in an
              efficient and tidy way.
            </p>
          </div>
        </div>
      </section>
      <section id='projects' className={classNameProjects}>
        <div className='div__projects--title'>
          <h2>Projects</h2>
        </div>
        <div className='div__projects--cards-container'>
          <div className='div__projects--contain project--1'>
            <div className='left'>
              <div className='top'>
                <h3 className='project--title'>Travel Self-Management System</h3>
                <p className='project--description'>
                  Administrative self-management system for a
                  company's per diem.</p>
              </div>
              <div className='bottom'>
                <h3>Tech used</h3>
                <div className='project--skills'>
                  <div className='skill--1'></div>
                  <div className='skill--2'></div>
                  <div className='skill--3'></div>
                  <div className='skill--4'></div>
                </div>
              </div>
            </div>
            <div className='right'>
              <a className='img-link'
                href="https://mendoza-porfolio.netlify.app/"
                target='_blank' rel='noreferrer'>
                <div className='img-proyect-1'></div>
              </a>
              <div className='project--liks'>
                <a href="https://mendoza-porfolio.netlify.app/" target="_blank"
                  rel="noreferrer">
                  <i className='bx bx-sm bx-globe'></i>
                </a>
                <a href="https://github.com/damendoz" target="_blank"
                  rel="noreferrer">
                  <i className='bx bx-sm bxl-github'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <DarkMode darkModeActive={darkModeActive} setDarkModeActive={setDarkModeActive} />
      </section>
      <footer id='contact' className={classNameContact}>
        <div className='footer__div--container'>
          <h2 className='div__h2--title'>Contact</h2>
          <h3 className='div__h2--subtitle'>If you are intrested in
            <span> hiring</span> me,
            <span> call</span> me, <span>email</span> me
            or <span>connect </span>
            and chat with me via LinkedIn!</h3>
          <div className='div__contact--card'>
            <div className='contact__card--link'><a
              href="tel:+584129042208"
              rel='noreferrer'
              target='_blank'
            >
              <i className='bx bx-md bxs-phone'></i>
            </a>
              <p>
                +58 412 904 2208
              </p>
            </div>
            <div className='contact__card--link'><a
              href="mailto: ing.dan.mendoza@gmail.com"
              rel='noreferrer'
              target='_blank'
            >
              <i className='bx bx-md bxs-envelope'></i>
            </a>
              <p>
                ing.dan.mendoza@gmail.com
              </p>
            </div>
            <div className='contact__card--link'><a
              href="https://www.linkedin.com/in/daniel-mendoza-299a06167"
              rel='noreferrer'
              target='_blank'
            >
              <i className='bx bx-md bxl-linkedin-square'></i>
            </a>
              <p>
                Daniel Mendoza
              </p>
            </div>
          </div>
        </div>
        <div className='footer__div--footer'>
          <p>© 2023 Created by Daniel Mendoza | All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
