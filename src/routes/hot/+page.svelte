<script lang="ts">
	import Wrapper from "$lib/core/Wrapper.svelte";
	import { dataProduct } from "$lib/data/index.ts";
	import ProductCard from "$lib/shared/ProductCard.svelte";
    
</script>
<Wrapper>
    <div class="flex items-center justify-between mb-6 mt-10">
        <h1 class="text-black font-medium text-lg sm:block hidden">Hots Products</h1>
    </div>
    <div class="grid sm:grid-cols-2 min-[618px]:grid-cols-3 min-[812px]:grid-cols-4 min-[1021px]:grid-cols-5 gap-6">
        {#each dataProduct as item }
            <ProductCard product={item} status="hot" />
        {/each}
    </div>
</Wrapper>