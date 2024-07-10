function biggestSmallerNumber(array) {
    let bigger = array [0];
    let smaller = array [0];

for (let index = 1; index < array.length; index += 1) {
   if (array[index] > bigger) {
    bigger = array [index];
   } else if (array [index] < smaller) {
    smaller = array[index];
   }
}

return `Menor: ${smaller}
Maior: ${bigger}`;


};





console.log(biggestSmallerNumber ([1, 2, 3, 6, 10, 4, 17, -2, 0]));