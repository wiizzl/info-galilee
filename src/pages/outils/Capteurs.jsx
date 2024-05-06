import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import bme from "../../assets/outils/capteurs/bme680.jpg";
import ligne from "../../assets/outils/capteurs/capteur_ligne.jpg";
import dht from "../../assets/outils/capteurs/dht22.jpg";
import dsb from "../../assets/outils/capteurs/ds18b20.jpg";
import hcsr from "../../assets/outils/capteurs/hcsr04.jpg";
import paj from "../../assets/outils/capteurs/paj7620.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export function Capteurs() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Capteurs</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des capteurs utilisés en sciences de l&apos;ingénieur : le principe
                        de fonctionnement, leurs caractéristiques, le schéma de cablage ainsi qu&apos;un exemple de programme.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="hcsr">
                    <Card
                        image={hcsr}
                        name="HC-SR04"
                        description="Le HC-SR04 est un module ultrason permettant l'évaluation d'une distance de 2cm à 400cm. La mesure est réalisée 'sans contact' et dispose d'une précision de 3mm dans les conditions optimales."
                    />
                </NavLink>
                <NavLink to="bme">
                    <Card
                        image={bme}
                        name="BME680"
                        description="Le BME680 est un capteur numérique environnemental qui mesure le gaz, la pression, l'humidité et la température."
                    />
                </NavLink>
                <NavLink to="dht">
                    <Card
                        image={dht}
                        name="DHT22"
                        description="Le DHT22 est un capteur à bas cout permettant d'acquérir une température et une humidité ambiante d'une manière numérique."
                    />
                </NavLink>
                <NavLink to="paj">
                    <Card
                        image={paj}
                        name="PAJ7620"
                        description="Ce capteur est capable de reconnaître jusqu'à 9 gestes et peut aussi être utilisé comme un détecteur de proximité."
                    />
                </NavLink>
                <NavLink to="dsb">
                    <Card
                        image={dsb}
                        name="DS18B20"
                        description="Le DS18B20 est un capteur de température numérique fabriqué par Maxim Integrated (anciennement Dallas Semiconductor). C'est l'un des capteurs de température les plus populaires du marché."
                    />
                </NavLink>
                <NavLink to="ligne">
                    <Card
                        image={ligne}
                        name="Capteur de ligne"
                        description="Le capteur suiveur de ligne est un capteur de contraste. Il est constitué d'une LED émettrice et d'un phototransistor. Le capteur suiveur de ligne est constitué de 2 capteurs de contraste."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Hcsr() {
    return <FileReader folder={"outils/capteurs"} fileName={"HC-SR04"} />;
}

export function Bme() {
    return <FileReader folder={"outils/capteurs"} fileName={"BME680"} />;
}

export function Dht() {
    return <FileReader folder={"outils/capteurs"} fileName={"DHT22"} />;
}

export function Paj() {
    return <FileReader folder={"outils/capteurs"} fileName={"PAJ7620"} />;
}

export function Dsb() {
    return <FileReader folder={"outils/capteurs"} fileName={"DS18B20"} />;
}

export function Ligne() {
    return <FileReader folder={"outils/capteurs"} fileName={"Capteur de ligne"} />;
}
