const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3010;

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = newItemPrice + cartTotal;
  res.send(result.toString());
});

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  let result;
  if (isMember === 'true') {
    result = cartTotal - (cartTotal * 10) / 100;
  } else {
    result = cartTotal;
  }
  res.send(result.toString());
});

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = (cartTotal * 5) / 100;
  res.send(result.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let result;
  if (shippingMethod === 'standard') {
    result = distance / 50;
  } else if (shippingMethod === 'express') {
    result = distance / 100;
  }
  res.send(result.toString());
});

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let result = weight * distance * 0.1;
  res.send(result.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let result = purchaseAmount * 2;
  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
