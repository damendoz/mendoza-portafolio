export function ProjectsSections({ darkModeActive }) {

    const classNameProjects = darkModeActive
        ? 'app__section--projects dark__mode--firstSection'
        : 'app__section--projects';

    const classNameContentProject1 = darkModeActive
        ? 'div__projects--contain project--1 dark__mode--secondSection'
        : 'div__projects--contain project--1';


    return (
        <section id='projects' className={classNameProjects}>
            <div className='div__projects--title'>
                <h2>Projects</h2>
            </div>
            <div className='div__projects--cards-container'>
                <div className={classNameContentProject1}>
                    <div className='left'>
                        <div className='top'>
                            <h3 className='project--title'>
                                BCV API
                            </h3>
                            <p className='project--description'>
                                The Exchange Rate API provides real-time exchange rate information specifically for the USD (U.S. Dollar) against the local currency. It extracts data from the official BCV (Central Bank of Venezuela) website and returns the current USD exchange rate along with the date when the rate was last updated.
                            </p>
                        </div>
                        <div className='bottom'>
                            <h3>Tech used</h3>
                            <div className='project--skills'>
                                <div className='skill--4'></div>
                                <div className='skill--5'></div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <a
                            className='img-link'
                            href='https://bcv-api.up.railway.app'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='img-proyect-1'></div>
                        </a>
                        <div className='project--links'>
                            <a
                                href='https://bcv-api.up.railway.app'
                                target='_blank'
                                rel='noreferrer'
                                className='project--a'
                            >
                                <i className='bx bx-sm bx-globe'></i>
                            </a>
                            <a
                                href='https://github.com/damendoz/BCV-API'
                                target='_blank'
                                rel='noreferrer'
                                className='project--a'
                            >
                                <i className='bx bx-sm bxl-github'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <DarkMode
          darkModeActive={darkModeActive}
          setDarkModeActive={setDarkModeActive}
        /> */}
        </section>
    )
}