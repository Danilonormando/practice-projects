const data = require('./data-yugioh');

// STRING PARA CASA CARTA COM ATQ E DEF

const getCardAtkAndDef = (cards) => {
return cards.map((card) => {
    if (card.atk !== undefined && card.def !== undefined){
        return `A carta ${card.name} possui o ataque de ${card.atk} e defesa de ${card.def}`;
    
}
return `esta carta não possui ataque e/ou defesa`

})
}

console.log(getCardAtkAndDef(data.cards));