import { useState } from 'react';
//icons
import 'boxicons';

//css
import './App.css';

//components
import { NavPc } from './components/nav-pc';
import { DarkMode } from './components/dark-mode';
import { ProjectsSections } from './components/projects-sections';

function App() {
  const [darkModeActive, setDarkModeActive] = useState(false);

  const classNameFirstSection = darkModeActive
    ? 'app__section dark__mode--firstSection'
    : 'app__section';

  const classNameAbout = darkModeActive
    ? 'app__section--about dark__mode--secondSection'
    : 'app__section--about';

  const classNameContact = darkModeActive
    ? 'app_footer dark__mode--secondSection'
    : 'app_footer';

  const classNameMySkillsContent = darkModeActive
    ? 'div__mySkills--content dark__mode--mySkills-content-on'
    : 'div__mySkills--content';

  const classNameContentText = darkModeActive
    ? 'div__content--text dark__mode--content-text-on'
    : 'div__content--text';

  const classContactCard = darkModeActive
    ? 'div__contact--card dark__mode--firstSection'
    : 'div__contact--card';

  return (
    <main className='app__main'>
      <NavPc darkModeActive={darkModeActive} />
      <section id='home' className={classNameFirstSection}>
        <div className='section__div'>
          <div className='div__presentation'>
            <h1>Full stack Web Developer.</h1>
            <p>
              Hi, I'm
              <span className='h1__span--name'> Daniel Mendoza</span>
              .
              <br />A passionate Developer from Venezuela.
            </p>
            <ul className='div__presentation--ul'>
              <li>
                <a className='div__presentacion--a' href='https://www.linkedin.com/in/daniel-mendoza-299a06167' rel='noreferrer'
                  target='_blank'>
                  <i className='bx bx-md bxl-linkedin-square'></i>
                </a>
              </li>
              <li>
                <a className='div__presentacion--a' href='https://github.com/damendoz' rel='noreferrer'
                  target='_blank'>
                  <i className='bx bx-md bxl-github'></i>
                </a>
              </li>
            </ul>
          </div>
          <div className='section__div--img'></div>
        </div>
        <div className='section__div--skills'>
          <div className='div__mySkills--title'>
            <h3>My Skills</h3>
          </div>
          <div className={classNameMySkillsContent}>
            <div className='div__mySkills--a'></div>
            <div className='div__mySkills--b'></div>
            <div className='div__mySkills--c'></div>
            <div className='div__mySkills--d'></div>
            <div className='div__mySkills--e'></div>
          </div>
        </div>
      </section>
      <section id='about' className={classNameAbout}>
        <div className='section__div--title'>
          <h2>About Me</h2>
        </div>
        <div className='section__div--content'>
          <div className={classNameContentText}>
            <div className='div__content--img'></div>
            <h3>An enthusiast Web Developer 💻</h3>
            <p>
              As a <span>Full Stack</span> Developer, I transform <span>ideas</span> into
              <span> code</span> by seamlessly integrating both the <span>frontend</span> and
              <span> backend</span> aspects of web development. I adeptly navigate obstacles,
              challenges, and problems with a focused and disciplined approach, making me a
              reliable choice for any project. Utilizing <span>React/Next</span> for the
              frontend, I create attractive, interactive, and professional websites that
              deliver real value. On the backend, my expertise with <span> Node.js</span> and
              <span> Python</span> ensures robust, scalable, and efficient solutions that
              power applications effectively. I believe that maintaining inner peace is
              crucial for working in an efficient, organized manner, enabling me to
              consistently deliver high-quality results.

            </p>
          </div>
        </div>
      </section>

      <ProjectsSections darkModeActive={darkModeActive} />

      <footer id='contact' className={classNameContact}>
        <div className='footer__div--container'>
          <h2 className='div__h2--title'>Contact</h2>
          <h3 className='div__h2--subtitle'>
            If you are intrested in
            <span> hiring</span> me,
            <span> call</span> me, <span>email</span> me or
            <span>connect </span>
            and chat with me via LinkedIn!
          </h3>
          <div className={classContactCard}>
            <div className='contact__card--link'>
              <a href='tel:+584129042208'
                rel='noreferrer'
                target='_blank'
                className='contact__card--a'>
                <i className='bx bx-md bxs-phone'></i>
              </a>
              <p>+58 412 904 2208</p>
            </div>
            <div className='contact__card--link'>
              <a
                href='mailto: ing.dan.mendoza@gmail.com'
                rel='noreferrer'
                target='_blank'
                className='contact__card--a'
              >
                <i className='bx bx-md bxs-envelope'></i>
              </a>
              <p>ing.dan.mendoza@gmail.com</p>
            </div>
            <div className='contact__card--link'>
              <a
                href='https://www.linkedin.com/in/daniel-mendoza-299a06167'
                rel='noreferrer'
                target='_blank'
                className='contact__card--a'
              >
                <i className='bx bx-md bxl-linkedin-square'></i>
              </a>
              <p>Daniel Mendoza</p>
            </div>
          </div>
        </div>
        <div className='footer__div--footer'>
          <p>© 2023 Created by Daniel Mendoza | All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
