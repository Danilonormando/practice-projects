let num1 = 45
let num2 = 10

if (num1 > num2) {
console.log (num1 + ' é maior que ' + num2)
} else if (num1 === num2) {
    console.log ( 'iguais')
} else {
    console.log (num2 + 'é maior que' + num1)
};

let num3 = 6;
let num4 = 4;
let num5 = 2;

if (num3 > num4 && num3 > num5) {
  console.log('O maior número é: ' + num3);
} else if (num4 > num3 && num4 > num5) {
  console.log('O maior número é: ' + num4);
} else if (num5 > num3 && num5 > num4){
  console.log('O maior número é: ' + num5);
} else {
  console.log('IIHH, tem números iguais!');
};

let GrauA = 65;
let GrauB = 100;
let GrauC = 15;

let sumOfAngles = GrauA + GrauB + GrauC;

let allAnglesArePositives = GrauA > 0 && GrauB > 0 && GrauC > 0;

if (allAnglesArePositives) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}