const baseUrl = "http://localhost:3001/products";

async function getAllProducts() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error ao buscar produtos", error);
    }
}

async function getProductById(productId) {
    try {
        const response = await fetch(`${baseUrl}/${productId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error ao buscar produto com id ${productId}`, error);
    }
}

async function createProduct(product) {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
            }),
        });

        if (!response.ok) {
            throw new Error("Erro ao criar produto");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error ao criar produto", error);
    }
}

async function editProduct(product) {
    try {
        const response = await fetch(`${baseUrl}/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
            }),
        });

        if (!response.ok) {
            throw new Error("Erro ao editar produto");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error ao editar produto", error);
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch(`${baseUrl}/${productId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Erro ao excluir produto");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error ao excluir produto", error);
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);
}

export const productService = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    formatPrice,
};
