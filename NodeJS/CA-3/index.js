const express = require('express');
const cors = require('cors');

const PORT = 5005;
const app = express();

app.use(express.json());
app.use(cors());

const cars = ['audi', 'BMW', 'Citroen', 'Dacia', 'Honda', 'VW'];

app.get('/', (req, res) => {
  res.send(cars);
});

app.post('/', (req, res) => {
  const car = req.body?.car;
  //const newCar = [...cars, car];

  res.send(car);
});

app.listen(PORT);
