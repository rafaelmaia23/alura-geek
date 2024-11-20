import { productService } from "../services/productService.js";

const table = document.querySelector(".admin__products__table");
const tableBody = document.querySelector("[data-products]");

function createProductRow(product) {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("table_row");
    tableRow.innerHTML = `<td class="table__image__container">
        <img src="${product.image}" alt="Imagem representando o Produto" class="table__image">
    </td>
    <td class="table__info__name">${product.name}</td>
    <td class="table__info__btns">
        <a href="edit-product.html?id=${product.id}" class="btn edit__btn" aria-label="Editar Produto">Editar</a>
            <a href="delete-product.html?id=${product.id}" class="btn delete__btn" aria-label="Excluir Produto">Excluir</a>
    </td>`;
    return tableRow;
}

async function renderProducts() {
    try {
        const products = await productService.getAllProducts();
        products.forEach((product) => {
            tableBody.appendChild(createProductRow(product));
        });
    } catch (error) {
        console.log("Error ao buscar produtos", error);
    }
}

table.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("edit__btn")) {
        const productId = target.dataset.productId;
        console.log(`Editar produto com ID: ${productId}`);
    }

    if (target.classList.contains("delete__btn")) {
        const productId = target.dataset.productId;
        console.log(`Excluir produto com ID: ${productId}`);
    }
});

renderProducts();
