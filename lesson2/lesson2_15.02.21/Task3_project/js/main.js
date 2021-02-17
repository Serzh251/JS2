class Calculate {
    totalCalorie = 0;
    totalPrice = 0;
    container = null;

    constructor() {
        this.container = document.querySelector('button');
        this._removeResult();
        this._typeBurger();
        this._typeToping();
        this._parsley();
        this._sauce();
        this._renderResult();
        this.container.insertAdjacentHTML('afterend', this._renderResult())
    }

    _typeBurger() {
        let typeBurger = document.getElementById("type");
        if (typeBurger.value == "small") {
            this.totalPrice += 50;
            this.totalCalorie += 20;
        } else {
            this.totalPrice += 100;
            this.totalCalorie += 40
        };
    }

    _typeToping() {
        let topping = document.getElementById("topping");
        if (topping.value == "cheeze") {
            this.totalPrice += 10;
            this.totalCalorie += 20;
        } else if (topping.value == "salad") {
            this.totalPrice += 20;
            this.totalCalorie += 5;
        } else {
            this.totalPrice += 15;
            this.totalCalorie += 10;
        }
    }

    _parsley() {
        let parsley = document.getElementById("parsley");
        if (parsley.checked) {
            this.totalPrice += 15;
        }
    }

    _sauce() {
        let sauce = document.getElementById("sauce");
        if (sauce.checked) {
            this.totalPrice += 20;
            this.totalCalorie += 5;
        }
    }

    _renderResult() {
        return `<div id="result">
            <h2>
                Ваш бургер стоит ${this.totalPrice} рублей и содержит ${this.totalCalorie} калорий
            </h2>
        </div>`
    }

    _removeResult() {
        let result = document.getElementById("result");
        result.remove();
    }

}

let button = document.querySelector('button');
button.addEventListener('click', function () {
    const Calc = new Calculate;
});