// Example #1
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
} */

// Example #2
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */

// const names = ["Ada", "Brendan", "Ali"]
// const newEvent = "birthday"

// Assignment #1 - For Loop function 
// 1) returns an array of thank you messages for each name provided to the function
function writeCards(arr, event_name) {
    const messages = []
    for (let i = 0; i < arr.length; i++) {
        let card = `Thank you, ${arr[i]}, for the wonderful ${event_name} gift!`
        messages[i] = card
    }
    return messages
}
// const finalMessages = writeCards(names, newEvent)

// Assignment #1 - For Loop function
// 1) invokes console.log once for each number, 
//    counting down from the number provided to zero
// 2) logs each number when counting down, starting from the number provided

// let num = 10
function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}
// countDown(num)


