// Task 1

let car = {
    model: 'Audi',
    price: 30000,
    speed: 120
}
for (let key in car) {
    if (typeof (car[key]) == 'number')
    { car[key] = car[key] * 2; }
}
console.log(car);


// Task 2
// let products = [
//     {
//         id: 1,
//         title: 'TV',
//         price: 1700,
//         discount: 10
//     },
//   {
//         id: 2,
//         title: 'kettle',
//         price: 700,
//         discount: 15
//     },
//   {
//         id: 3,
//         title: 'fridge',
//         price: 2300,
//         discount: 5
//     },
//   {
//         id: 4,
//         title: 'coffee machine',
//         price: 800,
//         discount: 0
//     },
//   {
//         id: 5,
//         title: 'microwave',
//         price: 1000,
//         discount: 5
//     }
// ]

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].title);
// }

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].title + ' ' + products[i].price);
// }

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].title + " " + (products[i].price - (products[i].price/100)*(products[i].discount)));
// }

// Function 1
// function checkNum(num1, num2)
// {
//     if (num1 % 2 == 0 && num2 % 2 == 0) {
//         return num1 * num2;
//     }
//     if (num1 % 2 != 0 && num2 % 2!=0) {
//         return num1 + num2;
//     }
//     if (num1 % 2 == 0 && num2 % 2 != 0) {
//       return num2;
//     } else {
//       return num1;
//     }
// }
// let result = checkNum(+prompt('enter the first number'), +prompt('enter the second number'));
// console.log(result);

// Function 2 (здесь я что-то накрутила и не разобралась до конца)
// function secDay() {
//     console.log("Количество дней" + days);
// }
// let sec = +prompt("Enter quantity of seconds");
// let days = sec / 86400;
// secDay;

// Function 3
// function isPrime(num) {
//     if (num % 1 == 0 && num % num == 0) {
//         return true;
//     }
//      else {
//       return false;
//     }
// }
// let result = isPrime(+prompt('enter the number'));
// console.log(result);

// Function 4
// function checkNum2(num1, num2)
// {
//     if (num1 > num2) {
//         return num2;
//     }
//     else {
//       return num1;
//     }
// }
// let result = checkNum2(+prompt('enter the first number'), +prompt('enter the second number'));
// console.log(result);

// Function 5
// function getArray(a, b) {
//   if (b < a) {
//     let temp = a;
//     a = b;
//     b = temp;
//   }
//   let numbers = [];
//   for (let i = a; i <= b; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// let numbers = getArray(Number(prompt()), Number(prompt()));
// console.log(numbers);