import { productService } from "../services/productService.js";

const productName = document.querySelector("[data-name]");
const productDescription = document.querySelector("[data-description]");
const productPrice = document.querySelector("[data-price]");
const productImage = document.querySelector("[data-image]");
const productId = document.querySelector("[data-id]");

const form = document.querySelector("[data-form]");

async function renderProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id) {
        try {
            const produtData = await productService.getProductById(id);

            productName.value = produtData.name;
            productDescription.value = produtData.description;
            productPrice.value = produtData.price;
            productImage.value = produtData.image;
            productId.value = produtData.id;
        } catch (error) {
            console.error("Erro ao buscar os detalhes do produto", error);
        }
    }
}

async function editProduct(event) {
    event.preventDefault();

    const product = {
        name: productName.value,
        description: productDescription.value,
        price: productPrice.value,
        image: productImage.value,
        id: productId.value,
    };

    try {
        await productService.editProduct(product);

        window.location.href = "../../pages/admin-products.html";
    } catch (error) {
        console.log("Erro ao editar o produto", error);
    }
}

form.addEventListener("submit", (event) => editProduct(event));

renderProduct();
