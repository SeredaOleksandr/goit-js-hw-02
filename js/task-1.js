// function makeTransaction (quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));


// function checkAge(age) {
//     if (age >= 18) {
//         message = "You are an adult";
//     }
//     if (age <= 18) {
//         message = undefined;
//     }
//     console.log(message);
// }

// checkAge(20)
// checkAge(17)
// checkAge(10)
// checkAge(30)



// function checkStorage(available, ordered) {
//     if (available >= ordered) {
//         console.log("Order is processed, our manager will contact you");
//       } else {
//         console.log("Not enough goods in stock!");
//       }
// }

// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(200, 20)
// checkStorage(200, 150)
// checkStorage(150, 180)

function checkStorage(available, ordered) {
    if (ordered === 0) {
        console.log("There are no products in the order!");
      } else if (available >= ordered) {
        console.log("The order is accepted, our manager will contact you");
      } else {
        console.log("Your order is too large, there are not enough items in stock!");
      }
}


checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(70, 0)
checkStorage(200, 20)
checkStorage(200, 250)
checkStorage(150, 0)
checkStorage(80, 80)