<script>
	import FRW from './../../core/FRW.svelte';
	import Wrapper from "$lib/core/Wrapper.svelte";

</script>
<div class="bg-[#F7F7F7] pt-10 pb-10">
    <Wrapper>
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.16309 19.3945L15.0176 6.31641L22.8691 19.3945H7.16309Z" fill="#9ED5E4"/>
                        <path d="M22.8691 19.8105H7.16309C7.00781 19.8105 6.86426 19.7314 6.78809 19.6025C6.71191 19.4736 6.71191 19.3154 6.78809 19.1836L14.6426 6.1084C14.7187 5.97949 14.8623 5.90039 15.0176 5.90039C15.1728 5.90039 15.3164 5.97949 15.3926 6.1084L23.2471 19.1836C23.3232 19.3125 23.3232 19.4707 23.2471 19.6025C23.168 19.7314 23.0244 19.8105 22.8691 19.8105ZM7.91309 18.9756H22.1191L15.0176 7.1543L7.91309 18.9756Z" fill="#24ABE3"/>
                        <path d="M15.0176 0.673828C15.0176 0.673828 18.7969 4.53223 18.7969 10.998C18.7969 17.4639 15.0176 22.0137 15.0176 22.0137C15.0176 22.0137 11.2383 17.4639 11.2383 10.998C11.2383 4.53223 15.0176 0.673828 15.0176 0.673828Z" fill="#F7F9F9"/>
                        <path d="M15.0176 22.4326C14.8857 22.4326 14.7598 22.374 14.6777 22.2744C14.6367 22.2275 13.6904 21.0762 12.7324 19.1074C11.8506 17.2939 10.8018 14.4141 10.8018 10.998C10.8018 7.57324 11.8564 4.88086 12.7383 3.22266C13.6992 1.41797 14.6572 0.430664 14.6982 0.389648C14.7803 0.304687 14.8945 0.257812 15.0146 0.257812C15.1348 0.257812 15.249 0.304687 15.3311 0.389648C15.3721 0.430664 16.3301 1.41797 17.291 3.22266C18.1758 4.88086 19.2275 7.57617 19.2275 10.998C19.2275 14.4141 18.1787 17.2939 17.2969 19.1074C16.3418 21.0762 15.3926 22.2275 15.3516 22.2744C15.2725 22.374 15.1494 22.4326 15.0176 22.4326ZM15.0176 1.32422C14.6689 1.74902 14.0801 2.53418 13.5 3.63281C12.668 5.20312 11.6719 7.75781 11.6719 11.001C11.6719 14.2646 12.6768 17.0186 13.5205 18.7559C14.0947 19.9365 14.666 20.8125 15.0176 21.3018C15.3691 20.8066 15.9521 19.9189 16.5264 18.7295C17.3643 16.998 18.3633 14.25 18.3633 10.998C18.3633 7.75488 17.3701 5.20312 16.5352 3.62988C15.9521 2.53418 15.3633 1.74609 15.0176 1.32422Z" fill="#24ABE3"/>
                        <path d="M13.1133 8.1709C13.1133 8.65575 13.3139 9.12074 13.671 9.46358C14.0282 9.80642 14.5125 9.99902 15.0176 9.99902C15.5226 9.99902 16.007 9.80642 16.3641 9.46358C16.7212 9.12074 16.9219 8.65575 16.9219 8.1709C16.9219 7.68605 16.7212 7.22106 16.3641 6.87822C16.007 6.53538 15.5226 6.34277 15.0176 6.34277C14.5125 6.34277 14.0282 6.53538 13.671 6.87822C13.3139 7.22106 13.1133 7.68605 13.1133 8.1709Z" fill="#9ED5E4"/>
                        <path d="M15.0176 10.418C13.7285 10.418 12.6797 9.41016 12.6797 8.1709C12.6797 6.93164 13.7285 5.92383 15.0176 5.92383C16.3066 5.92383 17.3555 6.93164 17.3555 8.1709C17.3555 9.41016 16.3037 10.418 15.0176 10.418ZM15.0176 6.76172C14.209 6.76172 13.5498 7.39453 13.5498 8.17383C13.5498 8.95313 14.209 9.58594 15.0176 9.58594C15.8262 9.58594 16.4854 8.95313 16.4854 8.17383C16.4854 7.39453 15.8262 6.76172 15.0176 6.76172Z" fill="#24ABE3"/>
                        <path d="M16.6992 25.2217C16.6992 25.6025 16.7432 25.002 15.0176 29.3643C13.3711 25.2012 13.3359 25.6025 13.3359 25.2217C13.3359 24.167 14.0889 23.3115 15.0176 23.3115C15.9463 23.3115 16.6992 24.167 16.6992 25.2217Z" fill="#9ED5E4"/>
                        <path d="M15.0146 29.7832C14.833 29.7832 14.6719 29.6748 14.6074 29.5137C13.6934 27.2021 13.2715 26.2881 13.0898 25.9014C12.9316 25.5615 12.8965 25.4824 12.8965 25.2246C12.8965 23.9414 13.8457 22.8955 15.0117 22.8955C16.1777 22.8955 17.127 23.9414 17.127 25.2246V25.251C17.127 25.4766 17.0977 25.541 16.9717 25.8105C16.8018 26.1738 16.4004 27.0293 15.416 29.5166C15.3574 29.6748 15.1963 29.7832 15.0146 29.7832ZM15.0146 23.7275C14.3262 23.7275 13.7666 24.3984 13.7666 25.2217C13.7666 25.3008 13.7666 25.3008 13.8867 25.5586C14.0537 25.9189 14.3701 26.6045 15.0146 28.1982C15.7178 26.4551 16.0342 25.7783 16.1836 25.4619C16.2188 25.3887 16.251 25.3184 16.2627 25.2891V25.2217C16.2627 24.3984 15.7031 23.7275 15.0146 23.7275Z" fill="#24ABE3"/>
                    </svg>
                </div>
                <span class="text-xl font-semibold capitalize">hot deals</span>
            </div>
            <div class="grid sm:grid-cols-2  gap-8 mt-4">
                <div class="rounded-xl px-6 py-6 bg-white flex gap-10 items-center">
                    <div class="w-[180px] rounded-xl bg-[#F7F7F7] flex items-center justify-center h-full">
                        <div class="w-[94.94px] h-full">
                            <img src="/image3.3.png" alt="deal" class=" object-contain w-full h-full" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="capitalize text-[#BABABA] text-sm">mobile phones</span>
                        <div class="flex flex-col gap-2">
                            <span class="text-lg font-medium">Samsung Galaxy S24 Ultra </span>
                            <div class="flex items-center gap-2">
                                <span class="text-[#ED1D24]">2 013 008</span>
                                <FRW />
                                <span class="text-[#C7C7C7] line-through">2 013 008</span>
                                <FRW />
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-[#B2B2B2] capitalize">sold</span>
                                    <span class="">25/94</span>
                                </div>
                                <div class="flex items-center overflow-hidden h-2 rounded-xl">
                                    <div class="rounded-xl bg-[#24ABE3] w-[60%] h-2" />
                                    <div class="rounded-xl bg-[#F7F7F7] flex-1 h-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-4 gap-4 overflow-hidden rounded-xl w-full mt-2">
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">784</span>
                                    <span class="text-xs font-light capitalize leading-none">days</span>
                                </div>
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">08</span>
                                    <span class="text-xs font-light capitalize leading-none">hours</span>
                                </div>
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">40</span>
                                    <span class="text-xs font-light capitalize leading-none">minutes</span>
                                </div>
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">12</span>
                                    <span class="text-xs font-light capitalize leading-none">seconds</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-xl px-6 py-6 bg-white flex gap-10 items-center">
                    <div class="w-[180px] rounded-xl bg-[#F7F7F7] flex items-center justify-center h-full">
                        <div class="w-[94.94px] h-full">
                            <img src="/image3.3.png" alt="deal" class=" object-contain w-full h-full" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="capitalize text-[#BABABA] text-sm">mobile phones</span>
                        <div class="flex flex-col gap-2">
                            <span class="text-lg font-medium">Samsung Galaxy S24 Ultra </span>
                            <div class="flex items-center gap-2">
                                <span class="text-[#ED1D24]">2 013 008</span>
                                <FRW />
                                <span class="text-[#C7C7C7] line-through">2 013 008</span>
                                <FRW />
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-[#B2B2B2] capitalize">sold</span>
                                    <span class="">25/94</span>
                                </div>
                                <div class="flex items-center overflow-hidden h-2 rounded-xl">
                                    <div class="rounded-xl bg-[#24ABE3] w-[60%] h-2" />
                                    <div class="rounded-xl bg-[#F7F7F7] flex-1 h-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-4 gap-4 overflow-hidden rounded-xl w-full mt-2">
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">784</span>
                                    <span class="text-xs font-light capitalize leading-none">days</span>
                                </div>
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">08</span>
                                    <span class="text-xs font-light capitalize leading-none">hours</span>
                                </div>
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">40</span>
                                    <span class="text-xs font-light capitalize leading-none">minutes</span>
                                </div>
                                <div class="flex flex-col gap-0.5 w-full leading-none items-center px-4 py-2 bg-[#24ABE3] text-white">
                                    <span class="font-medium text-lg leading-none">12</span>
                                    <span class="text-xs font-light capitalize leading-none">seconds</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-end justify-end">
                <div class="flex items-center gap-2 mt-6">
                    <span class="text-[#24ABE3] font-medium capitalize text-[15px]">see  all  deals</span>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M19.75 11.7257L4.75 11.7257" stroke="#24ABE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.7002 5.7013L19.7502 11.7253L13.7002 17.7503" stroke="#24ABE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
</div>