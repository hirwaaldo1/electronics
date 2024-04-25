<script>
	import Wrapper from '$lib/core/Wrapper.svelte';
    let process = 0;

</script>

<Wrapper>
	<div class="flex flex-col gap-6 mt-10">
        <!-- {process === 2 ? null :} -->
        {#if process === 2}
            <div class="max-w-2xl mx-auto w-full rounded-md bg-[#F7F7F7] py-10 flex items-center justify-center">
                <div class="flex flex-col gap-4 items-center">
                    <img src="/payment-successful1.png" class="" width={194} height={158} alt="payment successful" />
                    <h1 class="text-[#24ABE3] text-2xl font-semibold">Payment Successful</h1>
                    <p class="text-[#484848] text-sm text-center">Your payment was successful. Your order is being processed and will be <br /> shipped soon.</p>
                    <button class="bg-[#24ABE3] text-white py-3 px-4 rounded-md flex items-center gap-2">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7972 2.8656C11.1276 2.56876 11.5561 2.40455 12.0002 2.40455C12.4444 2.40455 12.8728 2.56876 13.2032 2.8656L19.8032 8.796C19.9909 8.96475 20.1409 9.17108 20.2437 9.40158C20.3464 9.63209 20.3996 9.88163 20.3996 10.134V18.6C20.3996 19.0774 20.21 19.5352 19.8724 19.8728C19.5348 20.2104 19.077 20.4 18.5996 20.4H15.5996C15.1222 20.4 14.6644 20.2104 14.3268 19.8728C13.9893 19.5352 13.7996 19.0774 13.7996 18.6V14.4C13.7996 14.2409 13.7364 14.0883 13.6239 13.9757C13.5114 13.8632 13.3587 13.8 13.1996 13.8H10.7996C10.6405 13.8 10.4879 13.8632 10.3753 13.9757C10.2628 14.0883 10.1996 14.2409 10.1996 14.4V18.6C10.1996 19.0774 10.01 19.5352 9.6724 19.8728C9.33484 20.2104 8.877 20.4 8.39961 20.4H5.39961C4.92222 20.4 4.46438 20.2104 4.12682 19.8728C3.78925 19.5352 3.59961 19.0774 3.59961 18.6V10.134C3.59961 9.624 3.81561 9.138 4.19721 8.796L10.7972 2.8656ZM12.4004 3.7584C12.2903 3.65956 12.1476 3.60489 11.9996 3.60489C11.8517 3.60489 11.7089 3.65956 11.5988 3.7584L4.99881 9.6888C4.93629 9.74492 4.88625 9.81355 4.85193 9.89024C4.81762 9.96694 4.79979 10.05 4.79961 10.134V18.6C4.79961 18.7591 4.86282 18.9117 4.97535 19.0243C5.08787 19.1368 5.24048 19.2 5.39961 19.2H8.39961C8.55874 19.2 8.71135 19.1368 8.82387 19.0243C8.9364 18.9117 8.99961 18.7591 8.99961 18.6V14.4C8.99961 13.9226 9.18925 13.4648 9.52682 13.1272C9.86438 12.7896 10.3222 12.6 10.7996 12.6H13.1996C13.677 12.6 14.1348 12.7896 14.4724 13.1272C14.81 13.4648 14.9996 13.9226 14.9996 14.4V18.6C14.9996 18.7591 15.0628 18.9117 15.1753 19.0243C15.2879 19.1368 15.4405 19.2 15.5996 19.2H18.5996C18.7587 19.2 18.9114 19.1368 19.0239 19.0243C19.1364 18.9117 19.1996 18.7591 19.1996 18.6V10.134C19.1994 10.05 19.1816 9.96694 19.1473 9.89024C19.113 9.81355 19.0629 9.74492 19.0004 9.6888L12.4004 3.7584Z" fill="white"/>
                            </svg>
                        </span>
                        <span class="text-sm">
                            Back to Shopping
                        </span>
                        </button>
                </div>
            </div>
            {:else}
            <div class="grid sm:grid-cols-2 gap-20 pb-20">
                <div class="flex flex-col gap-2">
                    <div class="flex items-center w-full">
                        <div
                            class="px-2.5 py-2.5 rounded-full items-center justify-center flex bg-[#24ABE3] text-white"
                        >
                            <div class="w-[20px] h-[20px]">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.7161 16.2234H8.49609"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.7161 12.0369H8.49609"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M11.2511 7.86011H8.49609"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.9085 2.7498C15.9085 2.7498 8.23149 2.7538 8.21949 2.7538C5.45949 2.7708 3.75049 4.5868 3.75049 7.3568V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.3568C20.4155 4.5728 18.6925 2.7498 15.9085 2.7498Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="w-full h-1.5 bg-[#24ABE3]" />
                        <div
                            class="px-2.5 py-2.5 rounded-full items-center justify-center flex {process === 1 ? "bg-[#24ABE3] text-white" :"bg-[#F7F7F7] text-[#7C7C7C]"}  "
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01413 17.5906 9.01321H21.6389"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M18.0485 11.6429H17.7368"
                                    
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.03564 7.53816H12.4346"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="w-full h-1.5 bg-[#F7F7F7]" />
                        <div
                            class="px-2.5 py-2.5 rounded-full items-center justify-center flex {process === 2 ? "bg-[#24ABE3] text-white" :"bg-[#F7F7F7] text-[#7C7C7C]"}"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 19 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.1502 1.46939L6.63015 12.9894C6.56328 13.0563 6.48388 13.1094 6.39647 13.1457C6.30906 13.1819 6.21537 13.2006 6.12075 13.2006C6.02613 13.2006 5.93244 13.1819 5.84504 13.1457C5.75763 13.1094 5.67822 13.0563 5.61135 12.9894L0.571352 7.94939C0.436251 7.81429 0.360352 7.63106 0.360352 7.43999C0.360352 7.24893 0.436251 7.06569 0.571352 6.93059C0.706453 6.79549 0.88969 6.71959 1.08075 6.71959C1.27181 6.71959 1.45505 6.79549 1.59015 6.93059L6.12075 11.4621L17.1314 0.450594C17.2665 0.315492 17.4497 0.239594 17.6408 0.239594C17.8318 0.239594 18.0151 0.315492 18.1502 0.450594C18.2853 0.585695 18.3612 0.768932 18.3612 0.959994C18.3612 1.15106 18.2853 1.33429 18.1502 1.46939Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                    {#if process === 0}
                    <div class="flex flex-col gap-2">
                        <span class="text-[#24ABE3] font-normal capitalize">shipping address</span>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex flex-col gap-1.5">
                                <label for="city" class="text-sm">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    class="w-full border text-sm font-light bg-[#F4F4F4] placeholder:text-[#606060] border-[#F4F4F4] rounded-md px-4 py-2"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label for="LastName" class="text-sm">Last Name</label>
                                <input
                                    type="text"
                                    id="LastName"
                                    placeholder="Last Name"
                                    class="w-full border text-sm font-light bg-[#F4F4F4] placeholder:text-[#606060] border-[#F4F4F4] rounded-md px-4 py-2"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label for="Email" class="text-sm">Email</label>
                                <input
                                    type="email"
                                    id="Email"
                                    placeholder="Email"
                                    class="w-full border text-sm font-light bg-[#F4F4F4] placeholder:text-[#606060] border-[#F4F4F4] rounded-md px-4 py-2"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label for="Address" class="text-sm">Address</label>
                                <input
                                    type="Address"
                                    id="Address"
                                    placeholder="Address"
                                    class="w-full border text-sm font-light bg-[#F4F4F4] placeholder:text-[#606060] border-[#F4F4F4] rounded-md px-4 py-2"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label for="streetaddress" class="text-sm capitalize">street address</label>
                                <input
                                    type="streetaddress"
                                    id="streetaddress"
                                    placeholder="Street Number"
                                    class="w-full border text-sm font-light bg-[#F4F4F4] placeholder:text-[#606060] border-[#F4F4F4] rounded-md px-4 py-2"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label for="housenumber" class="text-sm capitalize">House Number</label>
                                <input
                                    type="housenumber"
                                    id="housenumber"
                                    placeholder="House Number"
                                    class="w-full border text-sm font-light bg-[#F4F4F4] placeholder:text-[#606060] border-[#F4F4F4] rounded-md px-4 py-2"
                                />
                            </div>
                        </div>
                        <div class="w-fit mt-4 mr-auto">
                            <button
                                on:click={() => process = 1}
                                class="bg-[#24ABE3] text-white flex items-center gap-2 py-3 px-4 text-[15px] rounded-md">
                                <span class="capitalize">proceed to checkout</span>
                                <span
                                    ><svg
                                        width="17"
                                        height="15"
                                        viewBox="0 0 17 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M15.75 7.72571L0.75 7.72571"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.7002 1.7013L15.7502 7.72531L9.7002 13.7503"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    {:else if process === 1}
                    <div class="mt-10">
                        <div class="w-full mx-auto max-w-sm rounded-xl bg-layer-2 bg-[#F7F7F7] px-8 py-6">
                            <h3 class="text-lg font-semibold text-heading">Transfer Details</h3>
                      
                            <dl class="mt-4 space-y-4">
                              <div class="flex items-center justify-between">
                                <dt class="text-sm font-semibold text-text">Amount</dt>
                                <dd class="text-lg font-semibold text-heading">3,200 Frw</dd>
                              </div>
                              <div class="flex items-center justify-between">
                                <dt class="text-sm font-semibold text-text">
                                  Total fees (included)
                                </dt>
                                <dd class="text-sm font-semibold text-heading">23.34 Frw</dd>
                              </div>
                              <div class="flex items-center justify-between">
                                <dt class="text-sm font-semibold text-text">
                                  Total amount to convert
                                </dt>
                                <dd class="text-sm font-semibold text-heading">3,176.66 Frw</dd>
                              </div>
                              <div class="flex items-center justify-between">
                                <dt class="text-sm font-semibold text-text">
                                  Guaranteed Rate (24 hours)
                                </dt>
                                <dd class="text-sm font-semibold text-heading">124.75 Frw</dd>
                              </div>
                              <div class="flex items-center justify-between">
                                <dt class="text-sm font-semibold text-text">Recipient gets</dt>
                                <dd class="text-lg font-semibold text-heading">377,244 Frw</dd>
                              </div>
                        
                            </dl>
                      
                            <div class="mt-6 flex flex-col space-y-2">
                              <button
                                on:click={() => process = 2}
                                type="button"
                                class="inline-flex bg-[#24ABE3] cursor-pointer items-center justify-center rounded-xl border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                              >
                                Continue to payment
                              </button>
                        
                            </div>
                          </div>
                    </div>
                    {/if}
                
                </div>
                <div class="px-4 sm:px-8 py-6 pb-10 sm:pr-20 bg-[#F7F7F7] rounded-xl">
                    <h3 class="capitalize font-semibold">order summary</h3>
                    <div class="flex flex-col gap-8 mt-8">
                        {#each [1,2,3,4] as item }
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div
                                    class="bg-[#FFFFFF] w-[74px] h-[72px] rounded-md flex items-center justify-center px-4 py-4"
                                >
                                    <img src="/image.png" alt="product" class="w-full h-full object-contain" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="sm:text-lg font-medium leading-none"
                                        >Samsung Galaxy S24</span
                                    >
                                    <span class="sm:text-lg font-medium leading-none"
                                        >Ultra</span
                                    >
                                </div>
                            </div>
                            <div>
                                <span class="font-normal" data-svelte-h="svelte-1pa9c3l">80 0000 Frw</span>
                            </div>
                        </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
	</div>
</Wrapper>
