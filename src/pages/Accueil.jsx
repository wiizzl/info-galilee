import "../css/Accueil.css";

import { HomeModel } from "../tools";

export function Accueil() {
    return (
        <main className="background">
            <div className="home-title">
                <div>
                    <h1>Info-Galilée</h1>
                </div>
                <div>
                    <p>
                        Un site vous permettant d&apos;accèder <span>aux cours</span>
                        <br />
                        du <span>Lycée Galilée</span>.
                    </p>
                </div>
            </div>
            <div className="home-model">
                <HomeModel />
            </div>
        </main>
    );
}
