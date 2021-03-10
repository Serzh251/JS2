
const pow = require('../pow');

describe('Функция возведения в степень под название pow принимает 2 значения и возвращает первое значение возведенное в степень второго', () => {
   it('При передаче функции аргументами значений 2 и 3 функция должна вернуть значение 8', () => {
       expect(pow(2, 3)).toBe(8);
   });
    it('При передаче функции аргументами значений 2 и 5 функция должна вернуть значение 32', () => {
        expect(pow(2, 5)).toBe(32);
    });

    it('При передаче функции аргументами значений 3 и 3 функция должна вернуть значение 27', () => {
        expect(pow(3, 3)).toBe(27);
    })

    describe('Обработка нестандартных аргументов в функции', () => {});

});