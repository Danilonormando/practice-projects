const grade = 80;
let message = '';

if (grade >= 80) {
  message = "Aprovadas!";
} else if (grade >= 60 && grade < 80) {
  message = "lista de espera.";
} else {
  message = "Reprovou.";
};

console.log(message);