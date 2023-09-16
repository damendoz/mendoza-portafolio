import { useState } from "react"
export function DarkMode({ darkModeActive, setDarkModeActive }) {

    const [active, setActive] = useState(false)

    const classNameOn = active ? 'dark-mode__toggle--ul active__DarkMode dark__mode--on' : 'dark-mode__toggle--ul'

    const classNameOff = active ? 'dark-mode__toggle--ul active__DarkMode dark__mode--of' : 'dark-mode__toggle--ul '

    const handleClick = () => {
        setActive(!active)
    }

    

    const HandleClicDarkMode = () => {
        setDarkModeActive(true)
        setActive(!active)
    }

    const HandleClickDarkModeOff = () => {
        setDarkModeActive(false)
        setActive(!active)
    }


    return (
        <div>
            {
                darkModeActive === false &&
                <div className='div__dark-mode--toggle'>
                    <button
                        onClick={handleClick}
                        className='dark-mode__toggle--circle'>
                        <i className='bx bxs-sun'></i>
                        <i className='bx bxs-down-arrow'></i>
                    </button>

                    <ul className={classNameOff}>
                        <li><i className='bx bxs-sun'></i>Light</li>
                        <li
                            onClick={HandleClicDarkMode}><i className='bx bxs-moon' ></i>Dark</li>
                        <li><i className='bx bxs-adjust-alt'></i>Auto</li>
                    </ul>

                </div>
            }
            {
                darkModeActive === true &&
                <div className='div__dark-mode--toggle'>
                    <button
                        onClick={handleClick}
                        className='dark-mode__toggle--circle'>
                        <i className='bx bxs-moon'></i>
                        <i className='bx bxs-down-arrow'></i>
                    </button>
                    <ul className={classNameOn}>
                        <li
                            onClick={HandleClickDarkModeOff}><i className='bx bxs-sun'></i>Light</li>
                        <li><i className='bx bxs-moon' ></i>Dark</li>
                        <li><i className='bx bxs-adjust-alt'></i>Auto</li>
                    </ul>

                </div>
            }
        </div>

    )
}