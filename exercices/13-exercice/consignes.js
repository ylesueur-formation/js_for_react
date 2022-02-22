/*
* A l'aide de la méthode foreach, parcourir le tableau et afficher nombres x2.
*/
let nombres = [12, 6, 3, 4, 9, 15, 67];

nombres.forEach( (nombre) => {
    let res = nombre * 2;
    console.log(res);
});

// nombres.forEach( nombre => console.log(nombre * 2));