const multiplicar = require('./../multiplicar');

test('multiplicar 5 x 4 es igual a 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});
