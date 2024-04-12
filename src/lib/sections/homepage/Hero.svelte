<script>
	import Wrapper from "$lib/core/Wrapper.svelte";
	import Dropdowns from "$lib/shared/Dropdowns.svelte";

    const menu = [
        {
            "title": "Laptops",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Mobiles",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Fashion",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Home & Living",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Health & Beauty",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Toys & Games",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Sports & Outdoors",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Automotive",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Books & Stationery",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health"]
        },
        {
            "title": "Groceries",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Shoes & Bags",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        },
        {
            "title": "Others",
            "options": ["All Categories", "Electronics", "Fashion", "Home & Living", "Health & Beauty", "Toys & Games", "Sports & Outdoors", "Automotive", "Books & Stationery", "Groceries", "Others"]
        }
    ]

</script>
<div>
    <Wrapper>
        <div class="flex gap-8">
            <div class="min-[745px]:block hidden w-[261px] bg-[#00325F] rounded-xl px-4 py-4">
                <div class="px-2 py-2 bg-[#084175] flex items-center gap-2 rounded-md">
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_95_41)">
                            <path d="M7.51669 2.36679L3.02502 5.86679C2.27502 6.45013 1.66669 7.69179 1.66669 8.63349V14.8085C1.66669 16.7418 3.24169 18.3252 5.17502 18.3252H14.825C16.7584 18.3252 18.3334 16.7418 18.3334 14.8168V8.75016C18.3334 7.74179 17.6584 6.45012 16.8334 5.87512L11.6834 2.26679C10.5167 1.45013 8.64169 1.49179 7.51669 2.36679Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <g opacity="0.4">
                            <path d="M13.75 9.58333L10.25 13.0833L8.91667 11.0833L6.25 13.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0833 9.58333H13.75V11.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_95_41">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span class="capitalize font-normal text-white">trending categories </span>
                </div>
                <div class="mt-4 flex flex-col gap-4 text-white">
            
                    {#each menu as item}
                        <Dropdowns {...item} />
                    {/each}
                </div>
            </div>  
            <div class="flex-1 flex-col flex gap-4">
                <div class="px-8 py-10 min-[1086px]:py-16 min-[1086px]:px-16 bg-[#E8FCFF] rounded-lg"> 
                    <div class="grid sm:grid-cols-2 gap-4 items-center">
                        <div class="flex flex-col gap-2">
                            <span class="text-sm font-medium text-[#ED1D24] capitalize">
                                today is deal   
                            </span>
                            <h1 class="text-4xl font-semibold">
                                Save up to 500 000 
                                    on select big screen TVs.
                            </h1>
                            <span class="text-[#626262] font-light">
                                Ornare quis nec congue in ut mi risus aliquam v....
                            </span>
                            <button class="px-9 py-3 mt-4 w-fit text-[16px] font-medium bg-[#24ABE3] text-white rounded-md capitalize">
                                shop now
                            </button>
                        </div>
                        <div class="relative">
                            <img src="/image.png" alt="hero" class="w-full h-full z-10 object-cover rounded-lg" />
                            <div class="z-50 absolute right-0 bottom-0">
                                <div class="flex items-center gap-2 bg-white rounded-lg p-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9167 15.8333L7.08335 10L12.9167 4.16667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span class="text-xs font-medium">1/4</span>   
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 5L15.5 12L8.5 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div class="bg-[#E8FCFF] rounded-lg grid grid-cols-2 items-center"> 
                        <div class="flex flex-col gap-2 px-8 py-10">
                            <span class="text-[#585858] text-xs uppercase">headset</span>
                            <h1 class="text-2xl font-semibold">Repeat Boss</h1>
                        </div>
                        <div class="h-full relative">
                            <img src="/image-1.png" alt="hero" class="w-full h-full z-10 object-cover rounded-lg" />
                        </div>
                    </div>
                    <div class="bg-[#E8FCFF] rounded-lg grid grid-cols-2 items-center"> 
                        <div class="flex flex-col gap-2 px-8 py-10">
                            <span class="text-[#585858] text-xs uppercase">laptops</span>
                            <h1 class="text-2xl font-semibold">Macbook Air
                                13.6 inch 2022 </h1>
                        </div>
                        <div class="h-full relative">
                            <img src="/image-2.png" alt="hero" class="w-full h-full z-10 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
</div>