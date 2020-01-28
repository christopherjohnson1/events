console.log('EVENTS');

const pies = [
    {
        name: "Dutch Apple",
        price: 1000,
        isWarm: false,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imgUrl: "https://images-gmi-pmc.edge-generalmills.com/5b481045-507b-4e3f-908e-749f5ca06e7e.jpg",
        drinkPairing: "whiskey",
        instructor: "Zoe" 
    },
    {
        name: "Regular Apple Pie",
        price: 5000.00,
        isWarm: true,
        isOrganic: true,
        crust: "under baked",
        iceCream: "Vegan chocolate",
        isAvailable: false,
        imgUrl: "https://images-gmi-pmc.edge-generalmills.com/e4b41748-7467-42b2-8cac-6a117a0fc7c2.jpg",
        drinkPairing: "All wines",
        instructor: "Mary" 
    },
    {
        name: "Pizza Pie",
        price: 2.50,
        isWarm: true,
        isOrganic: false,
        crust: "yeah!",
        iceCream: "nope",
        isAvailable: true,
        imgUrl: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/3/5/0/CC_campus-eats-stuffed-pizza-recipe-papa-dels_s4x3.jpg.rend.hgtvcom.616.462.suffix/1362506743810.jpeg",
        drinkPairing: "High Life",
        instructor: "Luke" 
    },
    {
        name: "Berry pie",
        price: 1,
        isWarm: false,
        isOrganic: false,
        crust: "Oreo",
        iceCream: "Peach",
        isAvailable: true,
        imgUrl: "https://images-gmi-pmc.edge-generalmills.com/808f7319-ed9b-41c7-8d35-959d83c868e8.jpg",
        drinkPairing: "Water",
        instructor: "Zoe" 
    },{
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imgUrl: "https://mathsolutions.com/wp-content/uploads/PISYMBOL.jpg",
        drinkPairing: "Milk",
        instructor: "Luke" 
    },
    {
        name: "Pumpkin Pie",
        price: 10,
        isWarm: false,
        isOrganic: false,
        crust: "extra flakey",
        iceCream: "Cool Whip",
        isAvailable: true,
        imgUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/FN_Pumpkin-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1386172256183.jpeg",
        drinkPairing: "Bourbon",
        instructor: "Chris" 
    },
    {
        name: "French Silk Pie",
        price: 12,
        isWarm: false,
        isOrganic: false,
        crust: "extra flakey",
        iceCream: "none",
        isAvailable: true,
        imgUrl: "https://amandascookin.com/wp-content/uploads/2017/08/homemade-bakers-square-french-silk-pie-680-500x375.jpg",
        drinkPairing: "milk",
        instructor: "Chris" 
    },
    {
        name: "Sheppards Pie",
        price: 5,
        isWarm: true,
        isOrganic: false,
        crust: "potato",
        iceCream: "none",
        isAvailable: true,
        imgUrl: "https://whatagirleats.com/wp-content/uploads/2019/03/Horizontal-100-shep-hero.jpg",
        drinkPairing: "Pale Ale",
        instructor: "Chris" 
    },
]

console.log('pies', pies);

// 3 cards per row
// nice images
// display all info in the pie objects
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const pieBuilder = () => {
    let domString = '';
    for(let i = 0; i < pies.length; i++) {
    domString += '<div class="pie">';
    domString += `<h1 class='name'>${pies[i].name}</h1>`;
    domString += `<div><img class="img" src=${pies[i].imgUrl} alt="${pies[i].name}"></div>`;
    domString += `<p class="price">$${pies[i].price}</p>`;
    domString += `<p class="temp">Is it warm? ${pies[i].isWarm}</p>`;
    domString += `<p class="crust">Type of crust = ${pies[i].crust}</p>`;
    domString += `<p class="iceCream">Ice cream pairing = ${pies[i].iceCream}</p>`;
    domString += `<p class="availability">Available = ${pies[i].isAvailable}</p>`;
    domString += `<p class="drink">Enjoy with a nice ${pies[i].drinkPairing}</p>`;
    domString += `<p class="instructor">${pies[i].instructor}'s favorite</p>`;
    domString += '</div>';
    }
    printToDom('pie-safe', domString);
};

pieBuilder();

