// console.log('ciao mamma')

//scrivi un programma che stampi in console i numeri da 1 a 100
    //creo un ciclo for per creare i miei numeri da 1 a 100
    for(let i = 0; i < 100; i++ ){
        //creo una variabile per visualizzare i numeri da 1 a 100 e non da 0 a 99
        let num = i + 1;
        //stampo il risultato del mio ciclo

        console.log(num)

        //SE stampi i multipli di 3 stamperai "fizz" al posto del numero
            //come faiccio a sapere se un numero e divisibile per 3?
        let numDivisoTre = num % 3;
        if(numDivisoTre === 0){
            console.log('Fizz')
        }

    }

        //nomino una variabile e uso l' operatore modulo 
        //stampo il valore della variabile 

    //SE stampi i multipli di 5 stamperai "buzz" al posto del numero 
        //come faiccio a sapere se un numero e divisibile per 5?
        //nomino una variabile e uso l' operatore modulo 
        //stampo il valore della variabile 

    //ALTRIMENTI SE sono multipli sia di 3 che di 5 stamperai "fizzbuzz"