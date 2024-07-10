const data = require('./data-yugioh');

//const newArray = [];

//for (let index =0; index < data.types.length; index += 1) {
    //newArray.push(data.types[index].name);
//};

const newArray = data.types.map((type => type.name))


console.log(newArray);