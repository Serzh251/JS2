const func = require('./func');
const os = require('os');
const fs = require('fs');
const moment = require('moment');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/api/products') {
        res.write(JSON.stringify([
            {name: 'Notebook', price: 2000},
            {name: 'Notebook', price: 2000},
            {name: 'Notebook', price: 2000}
        ]));
        res.end();
    }
});

// server.on('connection', () => {
//    console.log('new connection');
// });

server.listen(3000);
console.log('Server started at port 3000....');

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// fs.writeFile('some.txt', 'i\'m new', (err) => {
//    if (err) {
//        console.log(err);
//    }
// });
//
// fs.readFile('some.txt', 'utf8', (err, data) => {
//     console.log(data);
// });


// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());

// func(20);