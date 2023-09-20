export function NavMobile({ menuOpen, setMenuOpen }) {
  const navMobile = menuOpen ? 'nav__mobile active' : 'nav__mobile';

  const redirected = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={navMobile}>
      <a href='#home' onClick={redirected}>
        HOME
      </a>
      <a href='#about' onClick={redirected}>
        ABOUT
      </a>
      <a href='#projects' onClick={redirected}>
        PROJECTS
      </a>
      <a href='#contact' onClick={redirected}>
        CONTACT
      </a>
    </nav>
  );
}
