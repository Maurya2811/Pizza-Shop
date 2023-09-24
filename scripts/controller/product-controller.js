// Controller - I/O View Layer

// Data Exchange B/W View and Model.

import productOperations from "../services/product_operation.js";

async function loadPizzas() {
    const pizzas = await productOperations.loadProducts();
    console.log('Pizzas are ', pizzas);

    for (let pizza of pizzas) {
        preparePizzaCard(pizza);
    }
}
loadPizzas();

/*
<div class="col-4">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
 <h5 class="card-title">Card title</h5>
 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
*/
function addToCart() {
    //   console.log("Add to cart called",this.id);
    const currentButton = this;

    const pizzaId = currentButton.getAttribute('id');
    console.log('Pizza id is', pizzaId);
    //    console.log('Pizza id is', this.id);
    productOperations.search(pizzaId);
    printBasket();
}
function printBasket() {
   const cartProducts = productOperations.getProductsInCart();

   const basket = document.getElementById('basket');
   basket.innerText='';
     for(let product of cartProducts[0]){
        const li = document.createElement('h4');
        li.innerText = `${product.name} ${product.price}`;
        basket.appendChild(li);
     }
    const price = document.createElement('h3');
    price.innerText = `Total Price is : ${cartProducts[1].toFixed(2)
}`;
    basket.appendChild(price);
}
function preparePizzaCard(pizza) {
    const outPutDiv = document.querySelector("#output");
    const colDiv = document.createElement("div");
    colDiv.className = "col-4";
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";
    colDiv.appendChild(cardDiv);
    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = pizza.url;
    cardDiv.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardDiv.appendChild(cardBody);

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText = pizza.name;

    const pTag = document.createElement("p");
    pTag.className = "card-text";
    pTag.innerText = pizza.desc;

    const button = document.createElement("a");
    button.addEventListener('click', addToCart);
    button.className = "btn btn-primary";
    button.innerText = "Add To Card";
    button.setAttribute('id', pizza.id);

    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outPutDiv.appendChild(colDiv);
}