
import "./Navbar.css"
import { Link } from 'react-router'
const Navbar = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <div className="nav_menu">


                    <Link className="LOGO_LINK" to="#">
                        <img className='LOGO' src='https://www.ilovepdf.com/img/ilovepdf.svg' />
                    </Link>

                    <Link to="" className="">
                        MERGE PDF
                    </Link>


                    <Link to="" className="">
                        COMPRESS PDF
                    </Link>

                    <p>
                        Convert PDF
                    </p>

                    <p>
                        ALL PDF TOOLS
                    </p>
                </div>

                {/* 2nd links */}

                <div className="nav_actions">
                    <Link to="" className="">
                        LOGIN
                    </Link>

                    <Link to="" className="">
                        SIGN UP
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar