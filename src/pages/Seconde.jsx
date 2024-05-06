import { NavLink } from "react-router-dom";
import { Card } from "../tools/Card";

import snt from "../assets/seconde/snt.jpg";

export function Seconde() {
    return (
        <main className="background">
            <div className="title">
                <h1>
                    <u>Matières - Seconde Générale</u>
                </h1>
            </div>
            <div className="desc">
                <p>Vous retrouverez ici l&apos;sensemble des thèmes abordés en classe de seconde.</p>
            </div>
            <div className="chapter-navlink">
                <NavLink to="snt_sec">
                    <Card
                        image={snt}
                        name="Sciences Numérique et Techno"
                        description="Vous retrouverez ici l'ensemble des thèmes étudiés en SNT."
                    />
                </NavLink>
            </div>
        </main>
    );
}
