/* eslint-disable react/no-unescaped-entities */
//icons
import 'boxicons'

//css
import './App.css'

//components
// import { NavMobile } from './components/nav-mobile'
import { NavPc } from './components/nav-pc'

function App() {



  return (
    <main className='app__main'>
      <NavPc />
      <section id='home' className='app__section'>
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
      <section id='about' className='app__section--about'>
        <div className='section__div--title'>
          <h2>About Me</h2>
        </div>
        <div className='section__div--content'>
          <div className='div__content--text'>
            <div className='div__content--img'></div>
            <h3>An enthusiast Web Developer 💻</h3>
            <p>
              As a Full-Stack Developer, I turn ideas into code. I am capable of handling any obstacles, challenges or problems. Being a focused and disciplined person make me a wise choice. Using React/Next for the Frontend and Node, Express and SQL/NoSQL databases for the Backend, I am able to make attractive, interactive, useful and professional websites.
              In my free time, I love reading, going to the gym and trekking in the woods. I think being in peace with myself is a very important aspect when it comes to working in an efficient and tidy way.
            </p>
          </div>
        </div>
      </section>
      <section id='projects' className='app__section--projects'>
      </section>
      <footer id='contact' className='app_footer'>
        <div className='footer__div--container'>
          <h2 className='div__h2--title'>Contact</h2>
          <h3 className='div__h2--subtitle'>If you are intrested in hiring me,
            call me, email me or connect and chat with me via LinkedIn!</h3>
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
              href="https://www.linkedin.com/in/daniel-mendoza-985352246/"
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
