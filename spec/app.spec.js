const hello = require('../src/hello.js');

test('Should say "Hi, Earthly!"', () => {
    expect(hello()).toBe("Hi, Earthly!");
});
