


import someFunc, {logger as a, b} from './module1.js';

setTimeout(async () => {
    const module = await import('./module2.js');
    module.default();
    console.log(module.some);
}, 3000);

a(b);
someFunc(b);