export const productStore = defineStore("productStore", () => {
    const getProducts = async (params: any) => {
        const data = await $fetch("/api/user/products", {
            method: "get",
            params
        });
        return data;
    }

    const getProductById = async (id: string) => {
        const data = await $fetch(`/api/user/products/${id}`);
        return data;
    }

    return {
        getProducts,
        getProductById
    }
});