import "../css/Navbar.css";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="navigation">
                <div>
                    <Link to="">Info-Galilée</Link>
                </div>
                <div
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <ul className={menuOpen ? "open" : ""}>
                        <li>
                            <NavLink to="">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="seconde">Seconde</NavLink>
                        </li>
                        <li>
                            <NavLink to="premiere">Première</NavLink>
                        </li>
                        <li>
                            <NavLink to="terminale">Terminale</NavLink>
                        </li>
                        <li>
                            <NavLink to="outils">Outils</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
