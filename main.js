
function izracunaj() {

    let datumRodjenja = document.getElementById("unos").value;
    let danRodjenja = datumRodjenja[0] + datumRodjenja[1];
    let mesecRodjenja = ((datumRodjenja[2] + datumRodjenja[3]) - 1);
    let godinaRodjenja = datumRodjenja[4] + datumRodjenja[5] + datumRodjenja[6] + datumRodjenja[7];

    let trenutno = new Date();
    let trenutnoDan = trenutno.getDate();
    let trenutnoMesec = trenutno.getMonth();
    let trenutnoGodina = trenutno.getFullYear();

    console.log("DAn", danRodjenja, trenutnoDan);
    console.log("mesec", mesecRodjenja, trenutnoMesec);
    console.log("godina", godinaRodjenja, trenutnoGodina);

    godinaRodjenja;
    godina;
    mesec;
    var ukupnoMeseci;

    if ((trenutnoMesec > mesecRodjenja) || (trenutnomesec == mesecRodjenja & trenutnoDan >= danRodjenja)) {
        godina = godinaRodjenja;
    }
    else {
        godina = godinaRodjenja + 1
    }

    if (trenutnoMesec >= mesecRodjenja)
        var mesec = trenutnoMesec - mesecRodjenja;
    else {
        godina--;
        var mesec = 12 + trenutnoMesec - mesecRodjenja;

    }
    document.getElementById('godina').value = ((trenutnoGodina - godina) + "godinu/a");
    document.getElementById('mesec').value = ((mesec + ((trenutnoGodina - godina) * 12)) + "meseci");

}

document.getElementById("dugme").addEventListener("click", izracunaj);


