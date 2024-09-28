const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'product 1', price: 2000 },
  { id: 2, name: 'product 2', price: 3000 },
  { id: 3, name: 'product 3', price: 4000 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/products/:id', (req, res) => {
    const productse = products.find(p => p.id === parseInt(req.params.id));
    if (!productse) return res.status(404).send('Product not found');
    res.json(productse);
});
  
app.post('/api/products', (req, res) => {
  const newproducts = { id: products.length + 1, ...req.body };
  products.push(newproducts);
  res.json(newproducts);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`);
});