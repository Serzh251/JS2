

describe('Соответствие значений', () => {
   it('Проверка а на значение 10', () => {
       let a = 10;

       expect(a).toBe(10);
       expect(a).not.toBe(11);
   });

    it('Проверка объектов', () => {
        let user1 = {
            name: 'John',
            age: 10
        };

        let user2 = {
            name: 'John',
            age: 10
        };

        expect(user1).toEqual(user2);


        // expect(user1).toBeNull();
        // expect(user1).not.toBeNull();
        // expect(user1).not.toBeUndefined();
        // expect(user1).not.toBeTruthy();
        // expect(user1).not.toBeFalsy();
        // expect(user1).not.toBeNaN();
        // expect(user1).not.toBeGreaterThan(10);
        // expect(user1).not.toBeLessThan(10);
        // expect(user1).not.toBeGreaterThanOrEqual(10);
        // expect(user1).not.toBeLessThanOrEqual(10);


    });

    it('Regexp', () => {
       let str = 'jasmine AbcD test';

       expect(str).toMatch(/abcd/i);
       expect(str).not.toMatch(/abcd/);
    });

    it('Array', () => {
        let arr = ['black', 'white'];

        expect(arr).toContain('black');
        expect(arr).not.toContain('orange');
    });
});