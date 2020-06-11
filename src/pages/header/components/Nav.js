import React, {useState} from 'react'
import {scrollTo} from '../../../utils/scrollTo';
export default function Nav() {
    const [mobileNav, setmobileNav] = useState(false);
    const [close, setClose] = useState(false);
    const animatedLi = (text) => {
        return (
            <li key={text} onClick={() => scrollTo(text.toLowerCase())}>
                {text}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </li>
        )
    }
    const menuOptions = ['Home', 'About', 'Skills', 'Resume', 'Work', 'Contact'];
    const mobileNavTemplate = (
        <section className="mobile-nav">
           {menuOptions.map(menu => <div className="menu-item" key={`item-${menu}`}>{menu}</div>)}
        </section>
    );
    const handleMenu = () => {
        setmobileNav(true);
        setClose(true);
    };
    const handleClose = () => {
        setClose(false);
        setmobileNav(false);
    }
    return (
        <nav className="nav">
            <ul>
                {menuOptions.map(menu => animatedLi(menu))}
            </ul>
            <span className="icon" onClick={handleMenu}>Icon</span>
            {close ? <span className="close" onClick={handleClose}>Close</span> : null}
            {mobileNav ? mobileNavTemplate : null}
        </nav>
    )
}

