<script lang="ts">
	import FRW from './../core/FRW.svelte';
    export let status: "normal" | "hot" | "tracking"| "cancle" | 'paid' | undefined = 'normal';
</script>

<div class="flex flex-col gap-2">
    <div class="w-full h-[237px] relative rounded-xl flex  bg-[#F7F7F7] items-center justify-center">
        <div class="w-[125px] h-full">
            <img src="/image3.3.png" alt="deal" class=" object-contain w-full h-full" />
        </div>
        {#if status === "hot"}
        <div class="bg-[#FF8888] text-white rounded-xl capitalize text-xs absolute right-2.5 top-4 px-3 py-1.5 font-medium">
            hot
        </div>
        {/if}
        {#if status === "tracking"}
        <div class="bg-[#00325F] text-white rounded-xl capitalize text-xs absolute right-2.5 top-4 px-3 py-1.5 font-medium">
            in Progress
        </div>
        {/if}

        {#if status === "cancle"}
        <div class="bg-[#FF8888] text-white rounded-xl capitalize text-xs absolute right-2.5 top-4 px-3 py-1.5 font-medium">
            cancle
        </div>
        {/if}

        {#if status === "paid"}
        <div class="bg-[#24ABE3] text-white rounded-xl capitalize text-xs absolute right-2.5 top-4 px-3 py-1.5 font-medium">
            paid
        </div>
        {/if}
    </div>
    <div class="flex items-center gap-4 justify-between">
        <div class="flex flex-col gap-4">
            <div  class="flex flex-col gap-2">
                <span class="text-[#9E9E9E] capitalize font-light leading-none text-sm">mobile phones</span>
                <span class="leading-none font-medium">PlayStation 5</span>
            </div>
            <div class="flex items-center gap-2">
                <span>3 013 008</span>
                <FRW />
            </div>
        </div>
        <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#F7F7F7"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5137 29.5H16.1659C13.0996 29.5 10.7472 28.3925 11.4153 23.9348L12.1934 17.8936C12.6053 15.6694 14.024 14.8181 15.2689 14.8181H25.4474C26.7105 14.8181 28.0469 15.7334 28.5229 17.8936L29.3009 23.9348C29.8684 27.8891 27.5801 29.5 24.5137 29.5Z" stroke="#24ABE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.651 14.5984C24.651 12.2123 22.7167 10.278 20.3307 10.278C19.1817 10.2732 18.0781 10.7262 17.2639 11.5369C16.4497 12.3477 15.992 13.4494 15.992 14.5984" stroke="#24ABE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.2963 19.1018H23.2506" stroke="#24ABE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.4657 19.1018H17.4199" stroke="#24ABE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
                
        </div>
    </div>
</div>