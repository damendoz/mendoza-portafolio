import { useState } from "react"

import { NavMobile } from "./nav-mobile"

export function NavPc() {

    const [menuOpen, setMenuOpen] = useState(false)

    const HandleClickMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const line1 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine1' : 'div__menu--line1'
    const line2 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine2' : 'div__menu--line2'
    const line3 = menuOpen ? 'div__menu--line1 div__menu--line1 AnimateLine3' : 'div__menu--line3'

    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [projects, setProjects] = useState(false)
    const [contact, setContact] = useState(false)


    const HandleClicRedirectHome = () => {
        if (home === false) {
            setHome(!home)
            setAbout(false)
            setProjects(false)
            setContact(false)
        } else if (home === true) {
            setHome(!home)
            setAbout(false)
            setProjects(false)
            setContact(false)
        }
    }

    const HandleClicRedirectAbout = () => {
        if (about === false) {
            setAbout(!about)
            setHome(false)
            setProjects(false)
            setContact(false)
        } else if (about === true) {
            setAbout(!about)
            setHome(false)
            setProjects(false)
            setContact(false)
        }
    }

    const HandleClicRedirectProjects = () => {
        if (projects === false) {
            setProjects(!projects)
            setHome(false)
            setAbout(false)
            setContact(false)
        } else if (projects === true) {
            setProjects(!projects)
            setHome(false)
            setAbout(false)
            setContact(false)
        }
    }

    const HandleClicRedirectContact = () => {
        if (contact === false) {
            setContact(!contact)
            setHome(false)
            setAbout(false)
            setProjects(false)
        } else if (contact === true) {
            setContact(!contact)
            setHome(false)
            setAbout(false)
            setProjects(false)
        }
    }


    const redirectedHome = home ? 'active' : null
    const redirectedAbout = about ? 'active' : null
    const redirectedProjects = projects ? 'active' : null
    const redirectedContact = contact ? 'active' : null

    return (
        <header className='main__header'>
            <nav className='header__nav'>
                <h2 className='nav__h2'>Dani-dev</h2>
                <ul className='nav__ul'>
                    <li><a href="#home" className={redirectedHome} onClick={HandleClicRedirectHome}>HOME</a></li>
                    <li><a href="#about" className={redirectedAbout} onClick={HandleClicRedirectAbout}>ABOUT</a></li>
                    {/* <li><a href="#projects" className={redirectedProjects} onClick={HandleClicRedirectProjects}>PROJECTS</a></li> */}
                    <li><a href="#contact" className={redirectedContact} onClick={HandleClicRedirectContact}>CONTACT</a></li>
                </ul>
                <div className='nav__menu' onClick={HandleClickMenu}>
                    <div className={line1}></div>
                    <div className={line2}></div>
                    <div className={line3}></div>
                </div>
            </nav>
            <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
    )
}