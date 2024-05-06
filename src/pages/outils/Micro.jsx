import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import arduino from "../../assets/outils/micro/arduino.jpg";
import esp from "../../assets/outils/micro/esp32.png";
import raspberry from "../../assets/outils/micro/framboise.png";
import microbit from "../../assets/outils/micro/microbit.gif";

// eslint-disable-next-line react-refresh/only-export-components
export function Micro() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Microcontroleurs</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des cartes à microcontroleurs vous permettant de programmer les
                        capteurs et actionneurs dans le but d&apos;en faire des objets connectés.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="raspberry">
                    <Card
                        image={raspberry}
                        name="Raspberry PI"
                        description="Dans ce chapitre, vous pourrez comprendre comment créer des conditions (if, elif, else) et des répétitions (while, for)."
                    />
                </NavLink>
                <NavLink to="esp">
                    <Card
                        image={esp}
                        name="ESP 32"
                        description="ESP32 est une série de microcontrôleurs de type système sur une puce (SoC) d'Espressif Systems, intégrant la gestion du Wi-Fi et du Bluetooth."
                    />
                </NavLink>
                <NavLink to="microbit">
                    <Card
                        image={microbit}
                        name="Microbit"
                        description="Le micro:bit (aussi noté BBC micro:bit ou micro bit) est un ordinateur à carte unique3 doté d'un processeur ARM. Conçu au Royaume-Uni pour un usage éducatif dans un premier temps, le nano-ordinateur est maintenant disponible au grand public dans de nombreux pays."
                    />
                </NavLink>
                <NavLink to="arduino">
                    <Card
                        image={arduino}
                        name="Arduino"
                        description="Ce sont des cartes électroniques programmables (donc dotées d'un processeur et de mémoire) sur lesquelles nous pouvons brancher des capteurs de température, d'humidité, de vibration ou de lumière, une caméra, des boutons, des potentiomètres de réglage, des contacts électriques…"
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Raspberry() {
    return <FileReader folder={"outils/micro"} fileName={"Raspberry"} />;
}

export function Esp() {
    return <FileReader folder={"outils/micro"} fileName={"Esp"} />;
}

export function Microbit() {
    return <FileReader folder={"outils/micro"} fileName={"Microbit"} />;
}

export function Arduino() {
    return <FileReader folder={"outils/micro"} fileName={"Arduino"} />;
}
