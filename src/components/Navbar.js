import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../assets/logo2.svg';
import { IoMdMenu } from "react-icons/io";

class Navbar extends React.Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <IoMdMenu className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
