/* Creazione const lista prendendola dal DOM */
const lista = document.querySelector("ul")
/* Dichiarazione variabile li */
let li;
/* Creazione ciclo for  */
for ( let i=1; i<=100; i++){
   
    /* Calcolo dei multipli di 15, ovvero sia di 3 e di 5 */
    if(i%3 == 0 && i%5 == 0){    
        /* Assegnazione di un valora alla variabile li */
        li = `<li id=lista_num${i}>FizzBuzz</li>`
        /* Creazione tramite js di elementi di  una lista */
        lista.innerHTML += li;
    }

    /* Calcolo dei multipli di 5 */
    else if(i%5 == 0){
        /* Assegnazione di un valora alla variabile li */
        li = `<li id=lista_num${i}>Buzz</li>`
        lista.innerHTML += li;
    }

    /* Calcolo dei multipli di 3 */
    else if(i%3 == 0){
        /* Assegnazione di un valora alla variabile li */
        li = `<li id=lista_num${i}>Fizz</li>`
        /* Creazione tramite js di elementi di  una lista */
        lista.innerHTML += li;
    }

    /* Calcolo del resto dei numeri */
    else{
        /* Assegnazione di un valora alla variabile li */
        li = `<li id=lista_num${i}>${i}</li>`
        /* Creazione tramite js di elementi di  una lista */
        lista.innerHTML += li;
    }
    
}