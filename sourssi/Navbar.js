import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navi">
                <ul>
                    <CustomLinkki to="/Koti">Laskeutumissivu</CustomLinkki>
                    <CustomLinkki to="/Linkki4">Event Handlers</CustomLinkki>
                    <CustomLinkki to="/Laskin">Laskin App</CustomLinkki>
                </ul>
        </nav>
    )
};

const CustomLinkki = ({ to, children, ...props }) => {
    // path === absolute path
    const resolvoituPathi = useResolvedPath(to)
    // ottaa pathin ja varmistaa että koko path matchaa (end: true)
    const aktiivinen = useMatch({ path: resolvoituPathi.pathname, end: true })

    return (
        <li className={aktiivinen ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
};

export default Navbar;