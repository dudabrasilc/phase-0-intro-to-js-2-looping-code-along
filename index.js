// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//     console.log(`Wrapped ${gift} and added a bow!`);
// }

// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//     }
// };

// wrapGifts(gifts);



function writeCards(array, event) {   
    const emptyArray = []; 
    for (let i = 0; i < array.length; i++) {
        emptyArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return emptyArray;
}


// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
// }

// wrapGifts(gifts);

// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//         chooseSeedLocation();
//         plantSeed();
//         waterSeed();
//         keepWorking = checkForMoreSeeds();
//     }
// }

// let countup = 0;
// while (countup < 10) {
//     console.log(countup++)
// }

// for (let countup = 0; countup < 10; countup++) {
//     console.log(countup);
// }

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}

// countDown(10)