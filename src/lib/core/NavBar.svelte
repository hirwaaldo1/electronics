<script>

	import Wrapper from "./Wrapper.svelte";

    const menu = [
        {
            name: "Track Orders",
            href: "/track-orders"
        },
        {
            name: "about us",
            href: "/about"
        },
        {
            name: "contact us ",
            href: "/contact"
        }
    ]

</script>
<div class="bg-[#00325F] py-3">
    <Wrapper>
        <div class="flex items-center w-full justify-center sm:justify-between">
            <div class="flex items-center gap-8"> 
                <a href="mailto:elohome@gmail.com" class="flex items-center gap-2">
                    <div>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M9 11.375C10.0355 11.375 10.875 10.5355 10.875 9.5C10.875 8.46447 10.0355 7.625 9 7.625C7.96447 7.625 7.125 8.46447 7.125 9.5C7.125 10.5355 7.96447 11.375 9 11.375Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M13.875 7.625V11.375" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.75 14C6.75 14.5625 6.59251 15.095 6.31501 15.545C5.79751 16.415 4.845 17 3.75 17C2.655 17 1.70249 16.415 1.18499 15.545C0.907493 15.095 0.75 14.5625 0.75 14C0.75 12.3425 2.0925 11 3.75 11C5.4075 11 6.75 12.3425 6.75 14Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.57959 14L3.32208 14.7425L4.91959 13.265" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.5 11.975V7.25C1.5 4.625 3 3.5 5.25 3.5H12.75C15 3.5 16.5 4.625 16.5 7.25V11.75C16.5 14.375 15 15.5 12.75 15.5H6.375" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span class="text-white font-normal text-sm">elohome@gmail.com</span>
                </a>
                <a href="mailto:elohome@gmail.com" class="hidden min-[440px]:flex items-center gap-2">
                    <div>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M9 11.375C10.0355 11.375 10.875 10.5355 10.875 9.5C10.875 8.46447 10.0355 7.625 9 7.625C7.96447 7.625 7.125 8.46447 7.125 9.5C7.125 10.5355 7.96447 11.375 9 11.375Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M13.875 7.625V11.375" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.75 14C6.75 14.5625 6.59251 15.095 6.31501 15.545C5.79751 16.415 4.845 17 3.75 17C2.655 17 1.70249 16.415 1.18499 15.545C0.907493 15.095 0.75 14.5625 0.75 14C0.75 12.3425 2.0925 11 3.75 11C5.4075 11 6.75 12.3425 6.75 14Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.57959 14L3.32208 14.7425L4.91959 13.265" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.5 11.975V7.25C1.5 4.625 3 3.5 5.25 3.5H12.75C15 3.5 16.5 4.625 16.5 7.25V11.75C16.5 14.375 15 15.5 12.75 15.5H6.375" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span class="text-white font-normal text-sm">KN 82 St, Kigali, Chic Building.</span>
                </a>
            </div>
            <div class="hidden sm:flex items-center gap-6">
                {#each menu as item}
                <a href={item.href}>
                    <span class="text-white font-normal capitalize text-sm">{item.name}</span>
                </a>
                {/each}
            </div>
        </div>
    </Wrapper>
</div>