const multiplicar = require('./../multiplicar');

test('multiplicar 5 x 4 es igual a 20', () => {
    expect(multiplicar(5, 4)).toBe(20);
});