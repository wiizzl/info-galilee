import { NavLink } from "react-router-dom";
import { Card } from "../tools/Card";

import geo from "../assets/terminale/geo.jpg";
import nsi from "../assets/terminale/nsi.jpg";
import si from "../assets/terminale/si.jpg";

export function Terminale() {
    return (
        <main className="background">
            <div className="title">
                <h1>
                    <u>Matières - Terminale Générale</u>
                </h1>
            </div>
            <div className="desc">
                <p>Vous retrouverez ici l&apos;sensemble des thèmes abordés en classe de terminale.</p>
            </div>
            <div className="chapter-navlink">
                <NavLink to="si_term">
                    <Card
                        image={si}
                        name="Sciences de l'Ingénieur"
                        description="Vous retrouverez ici l'ensemble des thèmes étudiés en SI."
                    />
                </NavLink>
                <NavLink to="nsi_term">
                    <Card
                        image={nsi}
                        name="Numérique et Science de l'Info"
                        description="Vous retrouverez ici l'ensemble des thèmes étudiés en NSI."
                    />
                </NavLink>
                <NavLink to="geo_term">
                    <Card
                        image={geo}
                        name="Géographie"
                        description="Vous retrouverez ici l'ensemble des thèmes étudiés en Géo."
                    />
                </NavLink>
            </div>
        </main>
    );
}
