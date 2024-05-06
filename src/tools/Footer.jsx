import "../css/Footer.css";

export function Footer() {
    function formatterDate(date) {
        const jour = ("0" + date.getDate()).slice(-2);
        const mois = ("0" + (date.getMonth() + 1)).slice(-2);
        const annee = date.getFullYear().toString().slice(-2);
        const dateFormatee = `${jour}/${mois}/${annee}`;
        return dateFormatee;
    }
    function saluerEnFonctionDeLHeure() {
        const heure = new Date().getHours();
        if (heure >= 5 && heure < 12) {
            return "Passez une bonne matinée !";
        } else if (heure >= 12 && heure < 18) {
            return "Passez une bonne après-midi !";
        } else if (heure >= 18 && heure < 21) {
            return "Passez une bonne soirée !";
        } else {
            return "Passez une bonne nuit !";
        }
    }
    return (
        <footer className="footer">
            <div className="footer-below">
                <div className="title">
                    <a href="https://galilee.lycee.ac-normandie.fr/" rel="noreferrer" target="_blank">
                        <p>Info-Galilée &copy; | {new Date().getFullYear()}</p>
                    </a>
                </div>
                <div className="footer-links">
                    <div>
                        <p>&#x1F4C5; Nous sommes le {formatterDate(new Date())}</p>
                        <p>&#x23F0; {saluerEnFonctionDeLHeure()}</p>
                    </div>
                    <br />
                    <a href="https://www.instagram.com/pierre.hlr_/" rel="noreferrer" target="_blank">
                        <p>&#128293; Site fait par Pierre H.</p>
                        <p>&#128218; Elève en T° (2023-2024)</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}
