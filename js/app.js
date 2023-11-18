const foodMenuOpen = document.querySelector('.foodMenu');
const foodMenu = document.querySelector('.subFoodMenu');
const bevMenuOpen = document.querySelector('.bevMenu');
const bevCateOpen = document.querySelector('.bevCate');
const bevNoAlcOpen = document.querySelector('.bevNoAlc');
const bevNoAlc = document.querySelector('.subBevNoAlc');
const bevAlcOpen = document.querySelector('.bevAlc');
const bevAlc = document.querySelector('.subBevAlc');
const saladsOpen = document.querySelector('.saladsOpen');
const salads = document.querySelector('.salads');
const grazingOpen = document.querySelector('.grazingOpen');
const grazing = document.querySelector('.grazing');
const appetizerOpen = document.querySelector('.appetizerOpen');
const appetizer = document.querySelector('.appetizer');
const burgerOpen = document.querySelector('.burgerOpen');
const burger = document.querySelector('.burger');
const flair = document.querySelector('.flair');
const flairOpen = document.querySelector('.flairOpen')
const westernOpen = document.querySelector('.westernOpen');
const western = document.querySelector('.western'); 
const pizzaOpen = document.querySelector('.pizzaOpen');
const pizza = document.querySelector('.pizza'); 
const pastaOpen = document.querySelector('.pastaOpen');
const pasta = document.querySelector('.pasta'); 
const grillOpen = document.querySelector('.grillOpen');
const grill = document.querySelector('.grill'); 
const sushiOpen = document.querySelector('.sushiOpen');
const sushi = document.querySelector('.sushi');
const dessertOpen = document.querySelector('.dessertOpen');
const dessert = document.querySelector('.dessert');
const juiceOpen = document.querySelector('.juiceOpen');
const juice = document.querySelector('.juice');
const coffeOpen = document.querySelector('.coffeOpen');
const coffe = document.querySelector('.coffe');
const teaOpen = document.querySelector('.teaOpen');
const tea = document.querySelector('.tea');
const softOpen = document.querySelector('.softOpen');
const soft = document.querySelector('.soft');
const energyOpen = document.querySelector('.energyOpen');
const energy = document.querySelector('.energy');
const waterOpen = document.querySelector('.waterOpen');
const water = document.querySelector('.water');
const mocktailOpen = document.querySelector('.mocktailOpen');
const mocktail = document.querySelector('.mocktail');



function hidden1() {
    foodMenu.classList.add('active');
    salads.classList.remove('active');
    appetizer.classList.remove('active');
    grazing.classList.remove('active');
    burger.classList.remove('active');
    flair.classList.remove('active');
    western.classList.remove('active');
    pizza.classList.remove('active');
    pasta.classList.remove('active');
    grill.classList.remove('active');
    sushi.classList.remove('active');
    dessert.classList.remove('active');
    juice.classList.remove('active');
    coffe.classList.remove('active');
    tea.classList.remove('active');
    soft.classList.remove('active');
    energy.classList.remove('active');
    water.classList.remove('active');
    mocktail.classList.remove('active');
}

function hidden2() {
    salads.classList.add('active');
    appetizer.classList.remove('active');
    grazing.classList.remove('active');
    burger.classList.remove('active');
    flair.classList.remove('active');
    western.classList.remove('active');
    pizza.classList.remove('active');
    pasta.classList.remove('active');
    grill.classList.remove('active');
    sushi.classList.remove('active');
    dessert.classList.remove('active');
    juice.classList.remove('active');
    coffe.classList.remove('active');
    tea.classList.remove('active');
    soft.classList.remove('active');
    energy.classList.remove('active');
    water.classList.remove('active');
    mocktail.classList.remove('active');
}



foodMenuOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden1();
    bevCateOpen.classList.remove('active');
    bevNoAlc.classList.remove('active');
    bevAlc.classList.remove('active');
});

bevMenuOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden1();
    bevCateOpen.classList.add('active');
    foodMenu.classList.remove('active');
});

bevNoAlcOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden1();
    bevNoAlc.classList.add('active');
    bevAlc.classList.remove('active');
    foodMenu.classList.remove('active');
});

bevAlcOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden1();
    bevAlc.classList.add('active');
    bevNoAlc.classList.remove('active');
    foodMenu.classList.remove('active');
});


saladsOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
});

grazingOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    grazing.classList.add('active');
    salads.classList.remove('active');
});

appetizerOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    appetizer.classList.add('active');
    salads.classList.remove('active');

});

burgerOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    burger.classList.add('active');
    salads.classList.remove('active');
});

flairOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    flair.classList.add('active');
    salads.classList.remove('active');
});

westernOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    western.classList.add('active');
    salads.classList.remove('active');
});

pizzaOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    pizza.classList.add('active');
    salads.classList.remove('active');
});

pastaOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    pasta.classList.add('active');
    salads.classList.remove('active');
});

grillOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    grill.classList.add('active');
    salads.classList.remove('active');
});

sushiOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    sushi.classList.add('active');
    salads.classList.remove('active');
});

dessertOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    dessert.classList.add('active');
    salads.classList.remove('active');
});

juiceOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    juice.classList.add('active');
    salads.classList.remove('active');
});

coffeOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    coffe.classList.add('active');
    salads.classList.remove('active');
});

teaOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    tea.classList.add('active');
    salads.classList.remove('active');
});

softOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    soft.classList.add('active');
    salads.classList.remove('active');
});

energyOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    energy.classList.add('active');
    salads.classList.remove('active');
});

waterOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    water.classList.add('active');
    salads.classList.remove('active');
});

mocktailOpen.addEventListener('click', function (e) {
    e.preventDefault();
    hidden2();
    mocktail.classList.add('active');
    salads.classList.remove('active');
});

