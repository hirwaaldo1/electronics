<script>
	import NavBar from './../lib/core/NavBar.svelte';
	import Header from './../lib/core/Header.svelte';
  import "../app.css";
	import Footer from '$lib/core/Footer.svelte';
  import { page } from '$app/stores';
  const meta_description = `top selling smartphone and accessories, laptops, desktops, and other electronics at affordable prices.`;

  $: currectOne = $page.url.pathname.split('/')[1];
  $: condtion = currectOne === "login" || currectOne === "forgot" || currectOne === "register";

  </script>  
  <svelte:head>
    <title>Electronics</title>
    <meta name="DNR" content={meta_description} />
    <meta name="og:description" content={meta_description} />
</svelte:head>
<main>
  {#if condtion}
  <div></div>
  {:else}    
  <NavBar />
  <Header />
  {/if}
  <slot />
  {#if condtion}
  <div></div>
  {:else}
  <Footer />
  {/if}
</main>