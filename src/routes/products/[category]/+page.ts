import { dataProduct } from '$lib/data/index.ts';

export async function load({ params }) {
   return {
    type: params.category
   }
}