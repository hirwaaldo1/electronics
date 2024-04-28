import { dataProduct } from '$lib/data/index.ts';

export async function load({ params }) {
    const getProduct = dataProduct.find((item) => item.id === Number(params.id));
    return getProduct;
}