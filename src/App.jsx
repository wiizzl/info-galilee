import "./css/App.css";

import { AnimatePresence, motion } from "framer-motion";
import { Outlet, RouterProvider, createHashRouter, useLocation, useRouteError } from "react-router-dom";

import {
    Accueil,
    Actionneurs,
    Arbres,
    Arduino,
    Asservissement,
    Balises,
    Bme,
    Can,
    Capteurs,
    Cartographie,
    Communication,
    Conditions,
    Cryptographie,
    Css,
    Dht,
    Dico,
    Diviser,
    Donnees,
    Dsb,
    Electricite,
    Energetique,
    Esp,
    Fonctions,
    Geo_Term,
    Graphes,
    GraphesEtats,
    Hcsr,
    Histoire,
    HtmlCss,
    Internet,
    Ligne,
    Maritime,
    Mers,
    Micro,
    Microbit,
    Modularite,
    Modulation,
    Mondialisation,
    NSI_Term,
    Numeration,
    Objets,
    ObjetsConnectes,
    Oled,
    Outils,
    Paj,
    Photographie,
    Premiere,
    Processus,
    Puce,
    Python,
    Raspberry,
    Rayonnement,
    Region,
    Relais,
    Reseaux,
    ReseauxSociaux,
    Routage,
    SI_Prem,
    SI_Term,
    SNT_Sec,
    Seconde,
    Servomoteur,
    Signaux,
    Structure,
    Terminale,
    Union,
    Web,
} from "./pages";
import { Footer, Navbar } from "./tools";

const hashRouter = createHashRouter([
    {
        path: "",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element: <Accueil />,
            },
            {
                path: "seconde",
                children: [
                    {
                        path: "",
                        element: <Seconde />,
                    },
                    {
                        path: "snt_sec",
                        children: [
                            { path: "", element: <SNT_Sec /> },
                            { path: "internet", element: <Internet /> },
                            { path: "web", element: <Web /> },
                            { path: "donnees", element: <Donnees /> },
                            { path: "photographie", element: <Photographie /> },
                            { path: "cartographie", element: <Cartographie /> },
                            { path: "reseauxsociaux", element: <ReseauxSociaux /> },
                            { path: "objets", element: <Objets /> },
                            { path: "histoire", element: <Histoire /> },
                        ],
                    },
                ],
            },
            {
                path: "premiere",
                children: [
                    {
                        path: "",
                        element: <Premiere />,
                    },
                    {
                        path: "si_prem",
                        children: [
                            { path: "", element: <SI_Prem /> },
                            { path: "electricite", element: <Electricite /> },
                            { path: "signaux", element: <Signaux /> },
                            { path: "numeration", element: <Numeration /> },
                            { path: "can", element: <Can /> },
                            { path: "communication", element: <Communication /> },
                            { path: "energetique", element: <Energetique /> },
                            { path: "objetsconnectes", element: <ObjetsConnectes /> },
                        ],
                    },
                ],
            },
            {
                path: "terminale",
                children: [
                    {
                        path: "",
                        element: <Terminale />,
                    },
                    {
                        path: "si_term",
                        children: [
                            { path: "", element: <SI_Term /> },
                            { path: "asservissement", element: <Asservissement /> },
                            { path: "reseaux", element: <Reseaux /> },
                            { path: "modulation", element: <Modulation /> },
                            { path: "graphesetats", element: <GraphesEtats /> },
                        ],
                    },
                    {
                        path: "nsi_term",
                        children: [
                            { path: "", element: <NSI_Term /> },
                            { path: "routage", element: <Routage /> },
                            { path: "processus", element: <Processus /> },
                            { path: "puce", element: <Puce /> },
                            { path: "modularite", element: <Modularite /> },
                            { path: "graphes", element: <Graphes /> },
                            { path: "arbres", element: <Arbres /> },
                            { path: "cryptographie", element: <Cryptographie /> },
                            { path: "diviser", element: <Diviser /> },
                        ],
                    },
                    {
                        path: "geo_term",
                        children: [
                            { path: "", element: <Geo_Term /> },
                            { path: "mers", element: <Mers /> },
                            { path: "maritime", element: <Maritime /> },
                            { path: "mondialisation", element: <Mondialisation /> },
                            { path: "rayonnement", element: <Rayonnement /> },
                            { path: "union", element: <Union /> },
                            { path: "region", element: <Region /> },
                        ],
                    },
                ],
            },
            {
                path: "outils",
                children: [
                    {
                        path: "",
                        element: <Outils />,
                    },
                    {
                        path: "micro",
                        children: [
                            { path: "", element: <Micro /> },
                            { path: "raspberry", element: <Raspberry /> },
                            { path: "esp", element: <Esp /> },
                            { path: "microbit", element: <Microbit /> },
                            { path: "arduino", element: <Arduino /> },
                        ],
                    },
                    {
                        path: "capteurs",
                        children: [
                            { path: "", element: <Capteurs /> },
                            { path: "hcsr", element: <Hcsr /> },
                            { path: "bme", element: <Bme /> },
                            { path: "dht", element: <Dht /> },
                            { path: "paj", element: <Paj /> },
                            { path: "dsb", element: <Dsb /> },
                            { path: "ligne", element: <Ligne /> },
                        ],
                    },
                    {
                        path: "actionneurs",
                        children: [
                            { path: "", element: <Actionneurs /> },
                            { path: "oled", element: <Oled /> },
                            { path: "servomoteur", element: <Servomoteur /> },
                            { path: "relais", element: <Relais /> },
                        ],
                    },
                    {
                        path: "htmlcss",
                        children: [
                            { path: "", element: <HtmlCss /> },
                            { path: "structure", element: <Structure /> },
                            { path: "balises", element: <Balises /> },
                            { path: "css", element: <Css /> },
                        ],
                    },
                    {
                        path: "python",
                        children: [
                            { path: "", element: <Python /> },
                            { path: "conditions", element: <Conditions /> },
                            { path: "dico", element: <Dico /> },
                            { path: "fonctions", element: <Fonctions /> },
                        ],
                    },
                ],
            },
        ],
    },
]);

function PageError() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <main className="background">
                <div className="errorpage">
                    <h1>&#x26A0; Une erreur est survenue &#x26A0;</h1>
                    <p>
                        Merci de revenir en arrière ou de cliquer{" "}
                        <a href="/">
                            <u>ici</u>
                        </a>
                    </p>
                </div>
            </main>
        </>
    );
}

function Root() {
    const location = useLocation();
    return (
        <div className="transitionBackground">
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0, transition: { duration: 0.3 } }}

                    // TODO: la transition marche mais, il faudrait rajouter du délai au changement de page pour que cela puisse rendre bien
                    // peut-être https://github.com/imelgrat/react-delay-link
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default function App() {
    return <RouterProvider router={hashRouter}></RouterProvider>;
}
