const mydiv = document.getElementById("mydiv");
const API = "https://fakestoreapi.com/products";

fetch(API)
    .then((r) => r.json())
    .then((products) => {
        products.forEach((product) => {

            console.log(product.image);
            console.log(product.title);
            console.log(product.price);
            console.log(product.category);

            mydiv.innerHTML += `
                <div class="card">
                    <img src="${product.image}">
                    <div class="info">
                        <h2>${product.title}</h2>
                        <p>Price: ${product.price}$</p>
                        <p>Category: ${product.category}</p>
                    </div>
                </div>
            `;
        });
    })
    .catch((error) => {
        console.log(error);
    });
