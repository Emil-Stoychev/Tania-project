import './nav.css'

export const NavigationComponent = ({text, setIsLanguage, isLanguage }) => {
    
    let activeToggle = (e) => {
        let navbarLinks = e.currentTarget.parentElement.lastChild

        navbarLinks.classList.toggle('active')
    }

    return (
        <header>
            <nav className='navbar'>
                <div className="logo">
                    <img src="./images/main-logo.png" />
                    <select
                        style={{
                            backgroundImage: 'url(' + require(isLanguage ? './austria.png' : './usa.webp') + ')',
                            color: isLanguage ? "black" : "white"
                        }}
                        onChange={() => setIsLanguage(x => !x)}
                    >
                        <option>DE</option>
                        <option>EN</option>
                    </select>
                </div>

                <a className='toggle-btn' onClick={(e) => activeToggle(e)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>

                <div className='navbar-links'>
                    <ul>
                        <a href="#home">{text.home}</a>
                        <a href="#story">{text.story}</a>
                        <a href="#gallery">{text.gallery}</a>
                        <a href="#contacts">{text.contacts}</a>
                        <a href="#work-week">{text.workWeek}</a>
                        <a href="#ourService">{text.ourService}</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}