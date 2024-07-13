const data = require ('./data-yugioh')

// USANDO O MÉTODO FILTER

/* const getCardsByAtk = (data, atkNumber) => {
    const getFilterCards = data.filter ((card) => card.atk > atkNumber)

    return getFilterCards;
};

console.log(getCardsByAtk(data.cards, 2000)); */

const getCardsByType = (data, cardType) => {
    const filterResult = data
        .filter ((card) => card.typeId === cardType)
        .map((card) => ({ typeId: card.typeId, name: card.name }))
    
    return filterResult;
};

console.log(getCardsByType(data.cards, 1));