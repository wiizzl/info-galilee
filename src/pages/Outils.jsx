import { NavLink } from "react-router-dom";
import { Card } from "../tools/Card";

import actionneurs from "../assets/outils/actionneurs.jpg";
import capteurs from "../assets/outils/capteurs.jpg";
import htmlcss from "../assets/outils/htmlcss.jpg";
import micro from "../assets/outils/micro.jpg";
import python from "../assets/outils/python.png";

export function Outils() {
    return (
        <main className="background">
            <div className="title">
                <h1>
                    <u>Outils et complèmentaires</u>
                </h1>
            </div>
            <div className="desc">
                <p>Vous retrouverez ici l&apos;sensemble des thèmes bonus.</p>
            </div>
            <div className="chapter-navlink">
                <NavLink to="micro">
                    <Card
                        image={micro}
                        name="Cartes à microcontrôleurs"
                        description="Vous retrouverez ici l'ensemble des cartes permattant de programmer des capteurs et des actionneurs."
                    />
                </NavLink>
                <NavLink to="capteurs">
                    <Card
                        image={capteurs}
                        name="Capteurs"
                        description="Vous retrouverez ici l'ensemble des capteurs avec leurs caractéristiques, schéma de cablage et exemples de programme."
                    />
                </NavLink>
                <NavLink to="actionneurs">
                    <Card
                        image={actionneurs}
                        name="Actionneurs"
                        description="Vous retrouverez ici l'ensemble des actionneurs avec leurs caractéristiques, schéma de cablage et exemples de programme."
                    />
                </NavLink>
                <NavLink to="htmlcss">
                    <Card
                        image={htmlcss}
                        name="HTML et CSS"
                        description="Vous retrouverez ici l'ensemble des balises de base permettant de créer une page web statique simple."
                    />
                </NavLink>
                <NavLink to="python">
                    <Card
                        image={python}
                        name="Python"
                        description="Vous retrouverez ici l'ensemble des éléments qui vous permettront de faire vos premiers pas en python."
                    />
                </NavLink>
            </div>
        </main>
    );
}
