console.log('This is the start here chapter.');

const { log } = require('console');
// console.log(global);

const os = require('os');
const path = require('path');
const { add, substract, multiply, divide } = require('./math');

console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

app.get(
  '/hello(.html)?',
  (req, res, next) => {
    console.log('attempted to load hello.html');
    next();
  },
  (req, res) => {
    res.send('Hello World!');
  }
);

const one = (req, res, next) => {
  console.log('one');
  next();
};

const two = (req, res, next) => {
  console.log('two');
  next();
};

const three = (req, res) => {
  console.log('three');
  res.send('Finished');
};

app.get('/chain(.html)?', [one, two, three]);
