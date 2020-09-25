import React from 'react';
import './header.scss';

class Header extends React.Component {
    render(): JSX.Element {
        return (
            <nav className="nav-bar">
                <div className="nav-elements">
                    <div className="nav-el"><a href="/#">Mushinako</a></div>
                    <div className="nav-el"><a href="https://github.com/Mushinako">GitHub</a></div>
                    <div className="nav-el"><a href="/#">Placeholder</a></div>
                </div>
            </nav>
        )
    }
}

export default Header;