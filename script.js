const API_URL = "http://localhost:3000/api/products";

// ✅ Function to fetch all products
function fetchProducts() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      let productList = document.getElementById("productList");
      productList.innerHTML = "";
      data.forEach((product) => {
        let li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
}

// ✅ Function to add a new product
function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;

  if (!name || !price) {
    document.getElementById("addMessage").textContent =
      "Please enter name and price!";
    return;
  }

  let newProduct = { name, price: parseFloat(price) };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("addMessage").textContent = data.message;
      fetchProducts(); // Refresh product list
    })
    .catch((error) => console.error("Error adding product:", error));
}

/////////////////////////////////////////////////////////////
// const API_URL = "http://localhost:3000/api/products";

// // ✅ Function to fetch all products
// function fetchProducts() {
//   fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       let productList = document.getElementById("productList");
//       productList.innerHTML = "";
//       data.forEach((product) => {
//         let li = document.createElement("li");
//         li.textContent = `ID: ${product.id}, ${product.name} - $${product.price}`;
//         productList.appendChild(li);
//       });
//     })
//     .catch((error) => console.error("Error fetching products:", error));
// }

// // ✅ Function to update a product
// function updateProduct() {
//   let id = document.getElementById("updateProductId").value;
//   let name = document.getElementById("updateProductName").value;
//   let price = document.getElementById("updateProductPrice").value;

//   if (!id) {
//     document.getElementById("updateMessage").textContent = "Enter product ID!";
//     return;
//   }

//   let updatedProduct = {};
//   if (name) updatedProduct.name = name;
//   if (price) updatedProduct.price = parseFloat(price);

//   fetch(`${API_URL}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedProduct),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById("updateMessage").textContent = data.message;
//       fetchProducts(); // Refresh product list
//     })
//     .catch((error) => console.error("Error updating product:", error));
// }
