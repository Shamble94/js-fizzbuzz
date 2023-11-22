/* Creazione ciclo for  */
for ( let i=1; i<=100; i++)

    /* Calcolo dei multipli di 15, ovvero sia di 3 e di 5 */
    if (i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz")
    }

    /* Calcolo dei multipli di 5 */
    else if (i%5 == 0){
        console.log("Buzz")
    }

    /* Calcolo dei multipli di 3 */
    else if (i%3 == 0){
        console.log("Fizz")
    }

    /* Calcolo del resto dei numeri */
    else{
        console.log(i)
    }