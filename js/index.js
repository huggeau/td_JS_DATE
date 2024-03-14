document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        let dateIn;
        let dateOut;
        let tabDateIn;
        let tabDateOut;
        let flagDateIn = false;
        let flagDateOut = false;
        let deltaAnnee;
        let deltaMois;
        let deltaJour;

        let timeIn;
        document.getElementById("date_debut").onchange = function () {
            dateIn = document.getElementById("date_debut").value
            tabDateIn = dateIn.split("-");
            flagDateIn = true;
            if (flagDateIn == true && flagDateOut == true) {
                deltaAnnee = tabDateOut[0] - tabDateIn[0];
                deltaMois = tabDateOut[1] - tabDateIn[1];
                deltaJour = tabDateOut[2] - tabDateIn[2];
                console.log("L'écart est de " + deltaAnnee + " ans, " + deltaMois + " mois, " + deltaJour + " jour")
                document.getElementById("ecartDate").innerText = "L'écart est de " + deltaAnnee + " ans, " + deltaMois + " mois, " + deltaJour + " jour";
            }
        }
        document.getElementById("date_fin").onchange = function () {
            dateOut = document.getElementById("date_fin").value
            tabDateOut = dateOut.split("-");
            flagDateOut = true;
            if (flagDateIn == true && flagDateOut == true) {
                deltaAnnee = tabDateOut[0] - tabDateIn[0];
                deltaMois = tabDateOut[1] - tabDateIn[1];
                deltaJour = tabDateOut[2] - tabDateIn[2];
                console.log("L'écart est de " + deltaAnnee + " ans, " + deltaMois + " mois, " + deltaJour + " jour")
                document.getElementById("ecartDate").innerText = "L'écart est de " + deltaAnnee + " ans, " + deltaMois + " mois, " + deltaJour + " jour";
            }
        }

        document.getElementById("heure_debut").onchange = function () {
            timeIn = document.getElementById("heure_debut").value
            console.log(timeIn)
        }
    }
}
