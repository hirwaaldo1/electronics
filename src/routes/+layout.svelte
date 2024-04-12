<script>
	import Header from "$lib/core/Header.svelte";
	import NavBar from "$lib/core/NavBar.svelte";
  import "../app.css";
  const meta_description = `top selling smartphone and accessories, laptops, desktops, and other electronics at affordable prices.`;

  </script>  
  <svelte:head>
    <title>Electronics</title>
    <meta name="DNR" content={meta_description} />
    <meta name="og:description" content={meta_description} />
</svelte:head>
<main>
  <NavBar />
  <Header />
  <slot />
</main>