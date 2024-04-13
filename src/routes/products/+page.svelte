<script>
	import ProductCard from './../../lib/shared/ProductCard.svelte';
	import Wrapper from "$lib/core/Wrapper.svelte";

    const menu = [
        {
            name:"Mobile Phones",
            items: ["Cell Phones","Batteries, Power Banks & Chargers","Bluetooth Headsets & Accessories","Cases & Covers","Cell Phone Accessories"]
        },
        {
            name:"TV & Video",
            items:["TV & Video"]
        },
        {
            name:"Laptop & Tablets",
            items:["Tablets","Microsoft Surface","Android Tablets","Windows Tablets","iPad","Genuine Tablet Accessories"]
        },
        {
            name:"Specialty Electronics",
            items:["Media Players & TV Tuners","Pro Audio & Musical Instruments","Professional Video Devices","Alternative Energy","Electronic Components"]
        },
        {
            name:"Portable Electronics",
            items:["Portable Audio","Portable Video","Portable Accessories","Portable Gadgets","Portable Media Players"]
        }
    ]

</script>
<div class="flex flex-col gap-6 mt-10">
    <Wrapper>
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <span class="text-[#9B9B9B] text-sm">Home</span>
                <span class="text-sm">/</span>
                <span class="text-sm">Electronics</span>
            </div>
            <div class="flex gap-10">
                <div class="w-[260px] sm:block hidden rounded-lg px-6 py-8 bg-[#F7F7F7] h-fit">
                    <div class="flex flex-col gap-4">
                        {#each menu as {name, items} }
                            <div class="flex flex-col gap-2">
                                <span class="text-sm font-semibold">{name}</span>
                                <div class="flex items-start flex-col gap-1">
                                    {#each items as item }
                                        <a href="/" class="text-[#4D4D4D] text-sm font-light">{item}</a>
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    
                    </div>
                </div>
                <div class="w-full flex-1 flex-col flex gap-2">
                    <div class="sm:grid hidden sm:grid-cols-2 min-[855px]:grid-cols-3  gap-4">
                        <div class="flex items-center w-full bg-[#F7F7F7] rounded-[8px] justify-center py-4 h-[103px]">
                            <div class="flex gap-6 items-center">
                                <img src="/image3.3.png" class="w-[43px] h-[51px] object-contain" alt="" />
                                <span class="text-black font-normal capitalize text-sm">Mobile Phones</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full bg-[#F7F7F7] rounded-[8px] justify-center py-4 h-[103px]">
                            <div class="flex gap-6 items-center">
                                <img src="/image3.3.png" class="w-[43px] h-[51px] object-contain" alt="" />
                                <span class="text-black font-normal capitalize text-sm">Mobile Phones</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full bg-[#F7F7F7] rounded-[8px] justify-center py-4 h-[103px]">
                            <div class="flex gap-6 items-center">
                                <img src="/image3.3.png" class="w-[43px] h-[51px] object-contain" alt="" />
                                <span class="text-black font-normal capitalize text-sm">Mobile Phones</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full bg-[#F7F7F7] rounded-[8px] justify-center py-4 h-[103px]">
                            <div class="flex gap-6 items-center">
                                <img src="/image3.3.png" class="w-[43px] h-[51px] object-contain" alt="" />
                                <span class="text-black font-normal capitalize text-sm">Mobile Phones</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full bg-[#F7F7F7] rounded-[8px] justify-center py-4 h-[103px]">
                            <div class="flex gap-6 items-center">
                                <img src="/image3.3.png" class="w-[43px] h-[51px] object-contain" alt="" />
                                <span class="text-black font-normal capitalize text-sm">Mobile Phones</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full bg-[#F7F7F7] rounded-[8px] justify-center py-4 h-[103px]">
                            <div class="flex gap-6 items-center">
                                <img src="/image3.3.png" class="w-[43px] h-[51px] object-contain" alt="" />
                                <span class="text-black font-normal capitalize text-sm">Mobile Phones</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between my-8">
                        <h1 class="text-black font-medium sm:block hidden">ELECTRONICS FEATURED ITEMS</h1>
                        <div class="flex items-center gap-4 text-[#F0B634]">
                            <span class="capitalize">see  all  products</span>
                            <span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M20.25 11.7257L5.25 11.7257" stroke="#F0B634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.2002 5.7013L20.2502 11.7253L14.2002 17.7503" stroke="#F0B634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-1 min-[618px]:grid-cols-2 min-[812px]:grid-cols-3 min-[1021px]:grid-cols-4 gap-6">
                        {#each new Array(20).fill("") as item }
                            <ProductCard />
                        {/each}
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <div class="flex flex-col items-center mt-4">
                            <span class="capitalize font-bold">load more</span>
                            <span><svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12L12.3207 19.3491C13.2443 20.217 14.7557 20.217 15.6793 19.3491L23.5 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.5 1L12.202 11.105C13.4659 12.2983 15.5341 12.2983 16.798 11.105L27.5 1" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
</div>