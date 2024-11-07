/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
function area(numeroUnoEs1, numeroDueEs1) {
    return numeroUnoEs1 * numeroDueEs1;

}
console.log(area(9, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
function crazySum(numeroUnoEs2, numeroDueEs2) {
    if (numeroUnoEs2 !== numeroDueEs2) {
        return somma = numeroUnoEs2 + numeroDueEs2;
    } else {
        return somma = (numeroUnoEs2 + numeroDueEs2) * 3;
    }
}
console.log(crazySum(5, 5))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
function crazyDiff(numeroEs3) {
    parametroFornito = 19;
    moltiplicatore = 3;
    if (numeroEs3 < parametroFornito) {
        return Math.abs(numeroEs3 - parametroFornito);
    } else {
        return Math.abs(numeroEs3 - parametroFornito) * moltiplicatore;
    }



}
console.log(crazyDiff(7));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
function boundary(numeroEs4) {
    if (numeroEs4 === 400) {
        return true;
    } else if (numeroEs4 >= 20 && numeroEs4 <= 100) {
        return true;
    } else {
        return false
    }
}


console.log("E' il mio numero compreso tra 20 e 100 o uguale a 400: " + boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");
let stringaEs5 = "nel mezzo del cammino ";
function epify(stringaEs5) {
    //stringaUpper = stringa.toUpperCase(); TENTATIVO con testo EPICODE minusculo
    if (stringaEs5.indexOf("EPICODE") === 0 || stringaEs5.indexOf("epicode") === 0) {
        return stringaEs5;
    } else {
        return "EPICODE " + stringaEs5;
    }
}
console.log(epify(stringaEs5))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
function check3and7(numeroEs6){
    if(numeroEs6 >= 0 ){
        if(numeroEs6 % 3 === 0 || numeroEs6 % 7 === 0){
            return "Il tuo numero è multiplo di 3 o 7";
        }else{
            return "Il tuo numero non è multiplo di 3 o 7"
        }
    }else{
        return "Vengono accettati solo numeri positivi!"
    }
}
console.log(check3and7(30))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");
let stringaEs7 = "questa stringa è reverse";
function reverseString(stringaReverse){
    stringaReverse = stringaReverse.split("");
    stringaReverse = stringaReverse.reverse();
    stringaReverse = stringaReverse.join("");
    return stringaReverse;
}
console.log(reverseString(stringaEs7));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
let stringaEs8 = "questa è una stringa tutta maiuscola";
function upperFirst(stringaMin){
    stringaMin = stringaMin.split(" ");
        for (let i = 0 ; i < stringaMin.length ; i++){                                      
            stringaMin[i] = stringaMin[i].charAt(0).toUpperCase() + stringaMin[i].slice(1); // AGGIUNGE ALLA stringamin i  la prima lettera in maiuscolo e aggiunge il resto della parola di stringa min i dal valore 1


        
        }
        stringaMin = stringaMin.join(" ");
        return stringaMin;
}

console.log(upperFirst(stringaEs8));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
let stringaEs9 = "StringaTagliata";
function cutString(stringaTagliata){
    stringaTagliata = stringaTagliata.split("");
    stringaTagliata = stringaTagliata.slice(1,-1);
    stringaTagliata = stringaTagliata.join("")
    
    return stringaTagliata;


}
console.log(cutString(stringaEs9));



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");
function giveMeRandom(n){
    let arrayN=[];
    for(let i = 0 ; i < n; i++){
        arrayN.push(Math.floor(Math.random()* 11));

    }
    return arrayN;
}
console.log(giveMeRandom(6));