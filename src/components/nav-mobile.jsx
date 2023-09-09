export function NavMobile({ menuOpen }) {

    const navMobile = menuOpen ? 'nav__mobile active' : 'nav__mobile'


    return (
        <nav className={navMobile}>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
        </nav>
    )
}