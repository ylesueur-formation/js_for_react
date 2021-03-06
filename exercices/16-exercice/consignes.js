/*
* À l'aide de la méthode filter, récupérer les produits dont le prix est supérieure ou égal à 2 euros
*/
let produits = [
    {name: "tomate", prix: 2.99},
    {name: "lait d'amande" , prix: 1.89},
    {name: "pastèque" , prix: 1.89},
    {name: "basilic" , prix: .99},
    {name: "melon" , prix: 2},
];
    
produitFiltrer = produits.filter( (produit) => {
    if (produit.prix >= 2) {
        return true;
    } else {
        return false;
    }
    // return produit.prix >= 2;
})

console.log(produitFiltrer);