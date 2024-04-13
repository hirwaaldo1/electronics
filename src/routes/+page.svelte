<script>
	import BestBig from "$lib/sections/homepage/BestBig.svelte";
import Categories from "$lib/sections/homepage/Categories.svelte";
import Hero from "$lib/sections/homepage/Hero.svelte";
	import HotDeals from "$lib/sections/homepage/HotDeals.svelte";
	import TopSellers from "$lib/sections/homepage/TopSellers.svelte";
	import TrendingProducts from "$lib/sections/homepage/TrendingProducts.svelte";

</script>
<div class="flex flex-col gap-6 mt-10">
    <Hero />
    <HotDeals/>
    <TopSellers />
    <TrendingProducts />
    <Categories />
    <BestBig />
</div>