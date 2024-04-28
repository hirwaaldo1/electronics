<script lang="ts">
    export let showModal;
    function closeDialog() {
        showModal = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="fixed w-full h-full flex items-end justify-end bg-black/25 z-50 inset-0"
	on:click={()=>{
        closeDialog();
    }}
    >
    <div class="max-w-xl w-full bg-white h-full" on:click={((event)=>{
        event.stopPropagation();
    })}>
      <slot></slot>
    </div>
</div>

<style>
	dialog {
		padding: 0;
        width: 100%;
        height: 100%;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
