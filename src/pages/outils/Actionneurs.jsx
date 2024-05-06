import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import relais from "../../assets/outils/actionneurs/relais.jpg";
import servo from "../../assets/outils/actionneurs/servo.jpg";
import oled from "../../assets/outils/actionneurs/ssd1306.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export function Actionneurs() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Actionneurs</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des actionneurs utilisés en sciences de l&apos;ingénieur : le
                        principe de fonctionnement, leurs caractéristiques, le schéma de cablage ainsi qu&apos;un exemple de
                        programme.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="oled">
                    <Card
                        image={oled}
                        name="Afficheurs OLED"
                        description="L'écran OLED comporte un afficheur graphique ayant une diagonale de 3,3 cm pour une résolution de 128 X 64 pixels."
                    />
                </NavLink>
                <NavLink to="servomoteur">
                    <Card
                        image={servo}
                        name="Servomoteur"
                        description="Dans ce chapitre, nous allons voir comment fonctionne un servomoteur et comment le programmer."
                    />
                </NavLink>
                <NavLink to="relais">
                    <Card
                        image={relais}
                        name="Module relais"
                        description="Module permettant la commutation d'un relais à partir d'une sortie digitale d'une carte Arduino ou compatible pour la commande d'appareils nécessitant une puissance importante (moteur, solénoïde, etc...)."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Oled() {
    return <FileReader folder={"outils/actionneurs"} fileName={"Afficheur OLED"} />;
}

export function Servomoteur() {
    return <FileReader folder={"outils/actionneurs"} fileName={"Servomoteur"} />;
}

export function Relais() {
    return <FileReader folder={"outils/actionneurs"} fileName={"Module relais"} />;
}
