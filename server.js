// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = 3000;

// app.use(cors()); // Allow client-side requests
// app.use(express.json()); // Enable JSON body parsing

// // Global product array
// let products = [
//   { id: 1, name: "Apple", price: 5 },
//   { id: 2, name: "Orange", price: 7 },
//   { id: 3, name: "Banana", price: 10 },
//   { id: 4, name: "Grapes", price: 55 },
// ];

// // Route to get all products
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// // Route to get a product by ID
// app.get("/api/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return res.status(404).json({ message: "Product cant be found" });
//   }

//   res.json(product);
// });

// // Route to add a new product
// app.post("/api/products", (req, res) => {
//   const { name, price } = req.body;

//   // Validate input
//   if (!name || !price) {
//     return res.status(400).json({ message: "You need to add a name and a price" });
//   }

//   // Create new product object
//   const newProduct = {
//     id: products.length + 1, // Auto-increment ID
//     name,
//     price,
//   };

//   // Add the new product to the products array
//   products.push(newProduct);

//   // Return success message
//   res.status(201).json({
//     message: "Product has been added",
//     product: newProduct,
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//////////////////////////////////////////////////////////
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let products = [
  { id: 1, name: "Mascara", price: 100 },
  { id: 2, name: "Lipstick", price: 200 },
  { id: 3, name: "Rouge", price: 200 },
  { id: 4, name: "Foundation", price: 500 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.put("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;

  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[productIndex] = {
    name: name || products[productIndex].name,
    price: price || products[productIndex].price,
  };

  res.json({
    message: "Product updated successfully!",
    product: products[productIndex],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
