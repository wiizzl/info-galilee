import { NavLink } from "react-router-dom";
import { Card } from "../tools/Card";

import si from "../assets/premiere/si.jpg";

export function Premiere() {
    return (
        <main className="background">
            <div className="title">
                <h1>
                    <u>Matières - Première Générale</u>
                </h1>
            </div>
            <div className="desc">
                <p>Vous retrouverez ici l&apos;sensemble des thèmes abordés en classe de première.</p>
            </div>
            <div className="chapter-navlink">
                <NavLink to="si_prem">
                    <Card
                        image={si}
                        name="Sciences de l'Ingénieur"
                        description="Vous retrouverez ici l'ensemble des thèmes étudiés en SI."
                    />
                </NavLink>
            </div>
        </main>
    );
}
