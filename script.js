const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 =document.querySelector('#searchinput1');

searchicon1.addEventListener('click' ,function(){
    search1.style.display ='flex';
    searchicon1.style.display ='none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 =document.querySelector('#searchinput2');

searchicon2.addEventListener('click' ,function(){
    search2.style.display ='flex';
    searchicon2.style.display ='none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display ='block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right = '-100%';
})

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        images: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        images: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        images: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        images: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        images: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        images: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.images}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
