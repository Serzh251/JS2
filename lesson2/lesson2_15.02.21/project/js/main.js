class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
    }

    _fetchData() {
        this.data = [
            { title: 'Notebook', id: 1, price: 2000 },
            { title: 'Keyboard', id: 2, price: 200 },
            { title: 'Mouse', id: 3, price: 100 },
            { title: 'Gamepad', id: 4, price: 87 }
        ];
    }
    sumPrice() {
        let summary = 0;
        for (let el of this.data) {
            summary += el.price;
        }
        return summary
    }
    _render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ title: this.title, price: this.price, id: this.id } = product);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}


class Cart {
    data = []; // - cartItems array
    totalCost = 0; // общая стоимость товаров в корзине
    totalNumberProd = 0; // общее кол-во товаров в корзине
    orderStatus = ''; // статус выполнения заказа
    orderNumber = ''; // номер заказа, с буквы и цифры
    trackingNumber = '' // номер отслеживания

    totalCostCart() { //метод подсчета общей стоимости товаров в корзине

    }

    totalProdCart() { // метод подсчета общего кол-ва товара в корзине

    }
}

class CartItem {
    // some - cartItems array
    countProduct = 0; // количество товара в корзине
    stockAvailability = 0; // количество доступного товара на складе
    productName = ''; // наименование товара
    shortDesc = ''; // краткое описание товара

    render() { // метод, позволяющий отрендерить одну позицию товара в корзине

    }

    addProduct() { //метод добавления товара в корзину

    }

    deleteProduct() { //метод удаления товара из корзины

    }

}

const list = new Products('.products');
console.log(list.sumPrice());





