// console.log('ciao mamma')

//chiamo il mio container dal DOM
const mainElement = document.querySelector('.content')

//scrivi un programma che stampi in console i numeri da 1 a 100
//creo un ciclo for per creare i miei numeri da 1 a 100
for (let i = 0; i < 105; i++) {
    //creo una variabile per visualizzare i numeri da 1 a 100 e non da 0 a 99
    let num = i + 1;
    //stampo il risultato del mio ciclo

    // console.log(num)

    

    //SE stampi i multipli di 3 stamperai "fizz" al posto del numero
    //come faiccio a sapere se un numero e divisibile per 3?

    let numDivisoTre = num % 3;
    let numDivisoreCinque = num % 5;

    


    
    if(numDivisoTre === 0 && numDivisoreCinque === 0) { // SE è multiplo di 3 e di 5
        //Stampo "fizzbuzz"
        console.log('fizzbuzz');
        mainElement.innerHTML += `<div class="square fizzbuzz">${'fizzbuzz'}</div>`

    }else if (numDivisoTre === 0) { // SE il numero è multiplo di 3
        // Stampo Fizz
        console.log('fizz');
        mainElement.innerHTML += `<div class="square fizz">${'fizz'}</div>`

    } else if(numDivisoreCinque === 0) { //ALTRIMENTI SE multiplo di 5
        //Stampo buzz
        console.log('buzz');
        mainElement.innerHTML += `<div class="square buzz">${'buzz'}</div>`

    } else{
        console.log(num);
        mainElement.innerHTML += `<div class="square num_squere">${num}</div>`
    }
    
}
