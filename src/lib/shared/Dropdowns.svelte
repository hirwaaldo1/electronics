<script lang="ts">
    export let title: string;
    export let options: string[];
    let isOpen = false;
    function handleClick() {
        isOpen = !isOpen;
    }
</script>
<button class="flex justify-between items-center" on:click={handleClick}>
    <span class="font-normal capitalize">{title}</span>
    <div class="{isOpen ? "rotate-180" :"rotate-0"} transition-all duration-300">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8363 5.76728L8.31652 10.5764L3.50742 6.05664" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>

</button>
<div class="{isOpen ? "block" : " hidden"} ml-2">
    {#if options}
        {#each options as option}
                <div class="py-1 text-inherit text-sm">{option}</div>
        {/each}
    {/if}
</div>