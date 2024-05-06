import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import union from "../../assets/terminale/geographie/068_AA_24052021_361669.jpg";
import rayonnement from "../../assets/terminale/geographie/0914434-cropped.webp";
import region from "../../assets/terminale/geographie/860_mea2-region.webp";
import maritime from "../../assets/terminale/geographie/cdg_1.webp";
import mers from "../../assets/terminale/geographie/mers.jpg";
import mondialisation from "../../assets/terminale/geographie/mondialisation-090707.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export function Geo_Term() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Géographie</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>Vous retrouverez ici l&apos;ensemble des chapitres qui constituent le programme de géographie</p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="mers">
                    <Card image={mers} name="Les mers et les océans" description="Dans ce chapitre, " />
                </NavLink>
                <NavLink to="maritime">
                    <Card image={maritime} name="La France : puissance maritime" description="Dans ce chapitre, " />
                </NavLink>
                <NavLink to="mondialisation">
                    <Card image={mondialisation} name="La mondialisation" description="Dans ce chapitre, " />
                </NavLink>
                <NavLink to="rayonnement">
                    <Card image={rayonnement} name="La France : rayonnement" description="Dans ce chapitre, " />
                </NavLink>
                <NavLink to="union">
                    <Card image={union} name="L'UE dans la mondialisation" description="Dans ce chapitre, " />
                </NavLink>
                <NavLink to="region">
                    <Card image={region} name="Les régions françaises" description="Dans ce chapitre, " />
                </NavLink>
            </div>
        </main>
    );
}

export function Mers() {
    return <FileReader folder={"terminale/geo"} fileName={"Les mers et les océans au cœur de la mondialisation"} />;
}

export function Maritime() {
    return <FileReader folder={"terminale/geo"} fileName={"La France : une puissance maritime ?"} />;
}

export function Mondialisation() {
    return (
        <FileReader
            folder={"terminale/geo"}
            fileName={"La mondialisation : dynamiques territoriales, coopérations et tensions"}
        />
    );
}

export function Rayonnement() {
    return (
        <FileReader
            folder={"terminale/geo"}
            fileName={"La France : rayonnement international et attractivité dans la mondialisation"}
        />
    );
}

export function Union() {
    return (
        <FileReader folder={"terminale/geo"} fileName={"L'Union européenne dans la mondialisation : des dynamiques complexes"} />
    );
}

export function Region() {
    return (
        <FileReader
            folder={"terminale/geo"}
            fileName={"Les régions françaises dans l'Union européenne et dans la mondialisation"}
        />
    );
}
