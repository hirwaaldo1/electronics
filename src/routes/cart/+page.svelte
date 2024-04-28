<script lang="ts">
	import { dataProduct } from '$lib/data/index.ts';
	import Wrapper from "$lib/core/Wrapper.svelte";

    const formatter = new Intl.NumberFormat('en-US');
    let carts =  dataProduct.slice(0,4).map((v)=>{
        return {
            ...v,
            price: formatter.format(Number(`${v.price}00000`))
        }
    });
    


</script>
<Wrapper>
    <div class="flex flex-col gap-6 mt-10">
        <div class="w-full flex-1 flex-col flex gap-2">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <h1 class="text-black font-semibold capitalize ">shopping cart</h1>
                    <span class="bg-[#F9F9F9] rounded-lg text-sm px-4 py-1">01</span>
                </div>
            </div>
        </div>
        <div class="flex gap-10 min-[941px]:flex-row flex-col">
            <div class="flex-1">
                <div class="flex flex-col gap-4">
                    {#each carts as item }
                    <div class="rounded-xl bg-[#F7F7F7] px-8 py-4"> 
                        <div class="flex items-center gap-4">
                            <div class="w-full flex justify-between">
                                    <div class="flex items-center min-[770px]:gap-8 gap-2">
                                        <button
                                        on:click={() => carts = carts.filter(cart => cart.id !== item.id)}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#474747" stroke-width="1.5"/>
                                                <path d="M14.5 9.50002L9.50002 14.5M9.5 9.5L14.5 14.5" stroke="#474747" stroke-width="1.5" stroke-linecap="round"/>
                                            </svg>
                                        </button>
                                        <div class="flex items-center gap-4">
                                            <div class="bg-[#FFFFFF] w-[74px] h-[72px] rounded-md flex items-center justify-center px-4 py-4">
                                                <img src={item.images[0]} alt="product" class="w-full h-full object-contain">
                                            </div>
                                            <div class="flex flex-col gap-0.5">
                                                 <span class="sm:text-lg font-medium leading-none truncate w-[300px]">{item.title}</span>
                                                <span class="sm:text-lg font-medium leading-none">{item.category.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-4">

                                        <div class="bg-white rounded-md flex items-center gap-4 px-4 py-2">
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z" fill="black"/>
                                                </svg>
                                            </div>
                                            <span>1</span>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z" fill="black"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="min-[732px]:flex hidden items-center gap-2">
                                            <span class="font-light">{item.price}</span>
                                            <span class="font-medium">Rwf</span>
                                        </div>
                                    </div>
                            </div>
                    
                        </div>
                        <div class="w-1/2 min-[1032px]:flex hidden  mx-auto relative -left-[58px]  items-center justify-end">
                            <div class="grid grid-cols-2 gap-10">
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center gap-4">
                                        <span class="text-sm text-[#B6B6B6]">Color : </span>
                                        <span class="text-sm">Graphite</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <span class="text-sm text-[#B6B6B6]">Built-in Storage</span>
                                        <span class="text-sm">128GB</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center gap-4">
                                        <span class="text-sm text-[#B6B6B6]">RAM</span>
                                        <span class="text-sm">6GB</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <span class="text-sm text-[#B6B6B6]">Option:</span>
                                        <span class="text-sm">Iphone 12 pro</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
            <div class="w-full min-[1280px]:w-[408px]">
                <div class="flex flex-col gap-4">
                    <h1 class=" font-semibold text-xl leading-none capitalize">cart totals</h1>
                    <div class="flex items-center justify-between">
                        <span class="capitalize font-light text-[#727272]">sub total</span>
                        <span class="font-normal text-xl">
                            {formatter.format(Number(`${carts.reduce((acc, curr) => acc + Number(curr.price.replace(/\D/g, '')), 0) - 5000}`))} 
                            Rwf</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-sm font-medium capitalize">address</label>
                        <input type="text" class="w-full  outline-none placeholder:text-[#8F8F8F] pb-4 border-[#E0E0E0] border-b-2 py-2" placeholder="Enter your address">
                    </div>
                  
                <div class="flex items-center justify-between">
                    <span class="capitalize font-light text-black">total</span>
                    <span class="font-normal text-xl">{formatter.format(Number(`${carts.reduce((acc, curr) => acc + Number(curr.price.replace(/\D/g, '')), 0)}`))} Rwf</span>
                </div>
                <a href="/checkout" class="bg-[#24ABE3] w-full text-center text-white py-4 text-[15px] rounded-md capitalize">
                    proceed to checkout
                </a>
           
                </div>
            </div>
        </div>
    </div>
</Wrapper>