//при клике смотреть меню попадаем на просмотр нужной части экрана
document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

//при клике на навигацию певод на нужную часть экрана
const links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});      
    }
}

//при клике на заказать первод на сделать заказ
const button = document.getElementsByClassName('products-button');
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});      
    }
}

//валидация формы
const burger = document.getElementById('burger');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
document.getElementById('order-action').onclick = function () {
    let hasError = false; // для пустого начального значения, что нет ошибки

    [burger, name, phone].forEach(item => { //перебираем input
        if (!item.value) {
            (item.parentElement).parentElement.style.background = 'red';
            hasError = true;
        } else {
            (item.parentElement).parentElement.style.background = '';
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
    }
}

const productsPriseElement = document.getElementsByClassName('products-item-prise')
document.getElementById('change-currenty').onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 95;
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for (let i = 0; i < productsPriseElement.length; i++) {
        productsPriseElement[i].innerText = +(productsPriseElement[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
    }
}