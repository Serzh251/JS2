
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status !== 200) {
            console.log('some error');
            return;
        }

        cb(xhr.responseText);
    }
};

let getRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            resolve(xhr.responseText)

            reject(xhr.status)
        }

    });
}

class Products {
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData()
            .then(() => this._render());
    }

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                for (let product of data) {
                    this.products.push(new ProductItem(product));
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';
    rendered = false;

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ product_name: this.title, price: this.price, id_product: this.id } = product);
        this.img = img;
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button id= "buy" class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}


class Cart {
    cartItems = [];
    totalCost = 0; // общая стоимость товаров в корзине
    totalNumberProd = 0; // общее кол-во товаров в корзине
    orderStatus = ''; // статус выполнения заказа
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._render();
    }

    totalCostCart() { //метод подсчета общей стоимости товаров в корзине
        return this.cartItems.reduce((accum, item) => accum += item.price, 0);
    }

    totalProdCart() { // метод подсчета общего кол-ва товара в корзине
        return this.cartItems.reduce((accum, item) => accum += item.piece, 0);
    }

    addProduct() { //метод добавления товара в корзину

    }

    deleteProduct() { //метод удаления товара из корзины

    }
    _render() {
        for (let item of this.cartItems) {
            this.container.insertAdjacentHTML('beforeend', item.render())
        }
        // this.container.insertAdjacentHTML('afterend', `<div> общая стоимость товара в корзине ${this.totalCost}, общее количество товара в корзине ${this.totalNumberProd} </div>`)
    }
}

class CartItem {
    productName = ''; // наименование товара
    price = 0;
    piece = 0; // кол-во одного и того же товара в корзине, как то надо сгруппировать при создании CartItem одного и того же товара

    constructor(newItem) {
        ({ productName: this.productName, price: this.price } = newItem);
    }

    render() { // метод, позволяющий отрендерить одну позицию товара в корзине
        return `<div class="cart-item">
                 <div class="shortDesc">
                     <h3>${this.productName}</h3>
                     <p>${this.price}</p>
                     <button class="remove-btn">Удалить</button>
                 </div>
             </div>`
    }
}

const list = new Products('.products');
const basket = new Cart('.basket');

window.onload = () => {
    document.getElementById('buy').addEventListener('click', () => {

        basket.cartItems.push('itemAdd')
        // хочу здесь получить цену и название товара, у которого была нажата кнопка купить и добавить это в массив cartItems класса Cart
        // верно ли я двигаюсь? если да, то не понятно как добыть эти данные от родителя
    });
}

console.log(list.calcSum());





