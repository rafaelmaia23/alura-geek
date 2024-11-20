import { productService } from "../services/productService.js";

const productsList = document.querySelector("[data-products]");

function createProductCard(product) {
    const listItem = document.createElement("li");
    listItem.classList.add("products__item");
    listItem.innerHTML = `<div class="card">
            <div class="card__image">
                <img src="${
                    product.image
                }" alt="Imagem do produto" class="card__image__img">
            </div>            
            <div class="card__info">
                <h2 class="card__title">${product.name}</h2>
                <p class="card__description">${product.description}</p>
                <p class="card__price">${productService.formatPrice(
                    product.price
                )}</p>
                <input type="number" class="card__product__id" id="product-${
                    product.id
                }" name="product-${product.id}" hidden value="${product.id}">
                <a href="#" class="card__link">Comprar</a>   
            </div>
        </div>`;

    return listItem;
}

async function renderProducts() {
    try {
        const products = await productService.getAllProducts();
        products.forEach((product) => {
            productsList.appendChild(createProductCard(product));
        });
    } catch (error) {
        console.log("Error ao buscar produtos", error);
    }
}

renderProducts();
