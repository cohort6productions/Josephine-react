import * as React from 'react';
import logo from '../logo.svg';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" alt="" />
                </a>
            </nav>
        </header>
            )
        }
        
export default Header;