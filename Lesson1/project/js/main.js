const data = [
    { title: 'Notebook', id: 1, price: 2000 },
    { title: 'Keyboard', id: 2, price: 200 },
    { title: 'Mouse', id: 3, price: 100 },

];

const renderProduct = (title = 'товар', id = 0, price = 1000) => {
    return `
        <div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="btn-prod">В корзину</button>
        </div>
    `;
};

const render = (products) => {
    const productsList = products.map(item => renderProduct(item.title, item.id, item.price));

    document.querySelector('.products').innerHTML = productsList.join('');
};

render(data);