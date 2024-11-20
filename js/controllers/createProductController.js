import { productService } from "../services/productService.js";

const form = document.querySelector("[data-form]");

async function createProduct(event) {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const description = document.querySelector("[data-description]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    const product = {
        name,
        description,
        price,
        image,
    };

    try {
        await productService.createProduct(product);

        window.location.href = "../../pages/admin-products.html";
    } catch (error) {
        console.log("Erro ao criar produto", error);
    }
}

form.addEventListener("submit", (event) => createProduct(event));
