/**
 * Convertir des heures en minutes
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * l'utilisateur saisit des heures
 * l'utilisateur saisit des minutes
 * convertir les heures et minutes en minutes
 * exemple: 1h30 -> 90minutes
 */


let prompt = require("prompt");
prompt.start();

prompt.get(["heures", "minutes"], function(err, resultat) {
    if (err) {
        console.error(err);
    }
    // number + number = addition
    // string + number = concatenation
    // string + string = concatenation
    let convertion = resultat.heures * 60 + resultat.minutes * 1;
    // let convertion = resultat.heures * 60 + parseInt(resultat.minutes);
    // let convertion = resultat.heures * 60 + +resultat.minutes;
    console.log(`${resultat.heures}h${resultat.minutes} = ${convertion} minutes`);
});