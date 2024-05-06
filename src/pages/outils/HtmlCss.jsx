import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import balises from "../../assets/outils/htmlcss/contenuhtml.jpg";
import css from "../../assets/outils/htmlcss/css.jpg";
import structure from "../../assets/outils/htmlcss/structurehtml.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export function HtmlCss() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>HTML5 et CSS3</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>Vous retrouverez ici l&apos;ensemble des chapitres qui constituent les bases de la programmation web.</p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="structure">
                    <Card
                        image={structure}
                        name="Structure de base d'une page HTML"
                        description="Dans ce chapitre, vous aller pouvoir vous baser sur le code donné en exemple pour struturer votre pas HTML."
                    />
                </NavLink>
                <NavLink to="balises">
                    <Card
                        image={balises}
                        name="Contenu de la page + Balises"
                        description="Dans ce chapitre, vous aller pouvoir retrouver les balises de base vous permettant de créer le contenu de votre page."
                    />
                </NavLink>
                <NavLink to="css">
                    <Card
                        image={css}
                        name="CSS"
                        description="Dans ce chapitre, vous pourrez retrouver les éléments de base pour mettre en forme votre page html."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Structure() {
    return <FileReader folder={"outils/htmlcss"} fileName={"Structure"} />;
}

export function Balises() {
    return <FileReader folder={"outils/htmlcss"} fileName={"Balises"} />;
}

export function Css() {
    return <FileReader folder={"outils/htmlcss"} fileName={"Css"} />;
}
