import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import conditions from "../../assets/outils/python/condition.png";
import dico from "../../assets/outils/python/dictionnaire.png";
import fonctions from "../../assets/outils/python/fonction.png";

// eslint-disable-next-line react-refresh/only-export-components
export function Python() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Python</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des chapitres qui constituent les bases de la programmation en
                        python.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="conditions">
                    <Card
                        image={conditions}
                        name="Conditions et répétitions"
                        description="Dans ce chapitre, vous pourrez comprendre comment créer des conditions (if, elif, else) et des répétitions (while, for)."
                    />
                </NavLink>
                <NavLink to="dico">
                    <Card
                        image={dico}
                        name="Listes, tuples et dictionnaires"
                        description="Dans ce chapitre, vous pourrez comprendre comment utiliser les listes, les tuples et des dictionnaires."
                    />
                </NavLink>
                <NavLink to="fonctions">
                    <Card
                        image={fonctions}
                        name="Fonctions"
                        description="Dans ce chapitre, vous pourrez comprendre comment créer des fonctions et comment les utiliser."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Conditions() {
    return <FileReader folder={"outils/python"} fileName={"Conditions"} />;
}

export function Dico() {
    return <FileReader folder={"outils/python"} fileName={"Dictionnaires, listes et tuples"} />;
}

export function Fonctions() {
    return <FileReader folder={"outils/python"} fileName={"Fonctions"} />;
}
