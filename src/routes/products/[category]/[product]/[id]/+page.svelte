<script>
	import Frw from "$lib/core/FRW.svelte";
    import Wrapper from "$lib/core/Wrapper.svelte";
	import ProductCard from "$lib/shared/ProductCard.svelte";

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
     <div class="flex gap-10 md:flex-row flex-col md:items-end">
        <div class="bg-white flex-1">
            <div class="flex flex-col gap-4 items-center w-full ">
                <div class="bg-[#F7F7F7] rounded-lg w-full py-20 flex items-center justify-center">
                    <div class="md:w-[464px] md:h-[355.21px]">
                        <img src="https://via.placeholder.com/464x355" alt="product" class="w-full h-full object-contain">
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                    <div class="bg-[#F7F7F7] py-4 px-4 md:w-auto w-[100px]  rounded-md flex items-center justify-center">
                        <img src="https://via.placeholder.com/116x89" alt="product" class="w-full h-full object-contain">
                    </div>
                    <div class="bg-[#F7F7F7] py-4 px-4 md:w-auto w-[100px] rounded-md flex items-center justify-center">
                        <img src="https://via.placeholder.com/116x89" alt="product" class="w-full h-full object-contain">
                    </div>
                    <div class="bg-[#F7F7F7] py-4 px-4 md:w-auto w-[100px] rounded-md flex items-center justify-center">
                        <img src="https://via.placeholder.com/116x89" alt="product" class="w-full h-full object-contain">
                    </div>
                    <div class="bg-[#F7F7F7] py-4 px-4 md:w-auto w-[100px] rounded-md flex items-center justify-center">
                        <img src="https://via.placeholder.com/116x89" alt="product" class="w-full h-full object-contain">
                    </div>
        
                </div>
            </div>
        </div>
        <div class="md:w-[450px]">
            <div class="flex flex-col gap-7">
                <span class="text-[#CACACA] capitalize leading-none">smart tv</span>
                <h1 class=" font-semibold text-xl leading-none">Aqua Smart TV HD 32"</h1>
                <span class="capitalize px-4 py-2 bg-[#F7F7F7] rounded-md w-fit text-xs">24  iNSTOCK</span>
                <div class="flex items-center gap-4">
                    <span class="font-semibold text-xl leading-none">1 189 000</span>
                    <Frw />
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-[#CACACA] capitalize leading-none font-medium">description</span>
                    <p class="leading-5  capitalize">Enjin dai enjin celo horizen secret flow siacoin. Polkadot golem TRON vechain compound TRON ICON arweave stellar. Filecoin ox bancor hive terra.</p>
                </div>
                <div class="flex flex-wrap sm:flex-nowrap items-center w-full gap-10">
                    <div class="flex items-center bg-[#F7F7F7] rounded-md w-fit gap-6 px-8 py-3">
                        <div>
                            <span class="capitalize leading-none ">quantity</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-lg">-</span>
                            <span class="text-lg">1</span>
                            <span class="text-lg">+</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-sm leading-none capitalize">color</span>
                        <div class="flex items-center gap-4">
                            <div class="w-[24px] h-[24px] rounded-full bg-[#F9F871]"></div>
                            <div class="w-[24px] h-[24px] rounded-full bg-[#743600]"></div>
                            <div class="w-[24px] h-[24px] rounded-full bg-[#FFEBCD]"></div>
                            <div class="w-[24px] h-[24px] rounded-full bg-[#FFFFFF] border border-black"></div>
                            <div class="w-[24px] h-[24px] rounded-full bg-black"></div>
                    </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="capitalize font-light text-[#848484]">total</span>
                <span class="font-normal text-xl">1 189 000 Rwf</span>
            </div>
            <button class="bg-[#24ABE3] w-full text-white py-4 text-[15px] rounded-md capitalize">
                Add to cart
            </button>
            <div class="flex items-center gap-6">
                <span class="text-[#848484] text-sm font-light">Tags</span>
                <div class="flex gap-4 md:flex-nowrap flex-wrap">
                    <div class="px-3 py-1.5 bg-[#F7F7F7] text-[#858585] rounded-md text-sm capitalize">
                        speciality electronics
                    </div>
                    <div class="px-3 py-1.5 bg-[#F7F7F7] text-[#858585] rounded-md text-sm capitalize">
                        tv screens
                    </div>
                    <div class="px-3 py-1.5 bg-[#F7F7F7] text-[#858585] rounded-md text-sm capitalize">
                        speakers
                    </div>
                </div>
            </div>
            </div>
        </div>
     </div>
    </Wrapper>
    <Wrapper>
        <div class="flex flex-col gap-4 mt-10">
            <div class="flex gap-4 items-center">
                <button class="relative px-4 py-2 text-[#24ABE3] capitalize font-medium">
                    product details
                    <span class="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#24ABE3]"></span>
                </button>
                <button class="relative px-4 py-2 text-[#767676] capitalize font-medium">
                    product details
                    <span class="absolute -bottom-1 left-0 right-0 h-[2px] bg-transparent"></span>
                </button>
            </div>
            <div class="mt-4 flex flex-col gap-0">
                <p>Delve into the technical marvels of our Smart TVs, meticulously engineered to redefine your viewing experience. Here are the comprehensive specifications that make our Smart TVs stand out from the crowd:</p>
                <div class="flex flex-col mt-4">
                    <span class="text-base font-semibold">Display Technology:</span>
                    <div class="flex flex-col gap-1 ml-2 mt-2">
                        {#each ["Experience crystal-clear visuals with our cutting-edge LED/LCD display panels.","Enjoy lifelike colors and deep contrast ratios thanks to advanced HDR (High Dynamic Range) technology.","Our Smart TVs are equipped with IPS panels that offer wide viewing angles, ensuring that you get the best picture quality from any angle"] as item }        
                        <div class="flex items-center gap-2">
                            <div>
                                <span class="w-1.5 h-1.5 block rounded-full bg-[#484848]" />
                            </div>
                            <span class="text-[#484848]">{item}</span>
                        </div>
                        {/each}
                    </div>
            
                </div>
                <div class="flex flex-col mt-4">
                    <span class="text-base font-semibold">Resolution:</span>
                    <div class="flex flex-col gap-1 ml-2 mt-2">
                        {#each ["Immerse yourself in stunning detail with resolutions ranging from Full HD (1080p) to Ultra HD (4K).","Witness every pixel come to life with unparalleled clarity and sharpness."] as item }        
                        <div class="flex items-center gap-2">
                            <div>
                                <span class="w-1.5 h-1.5 block rounded-full bg-[#484848]" />
                            </div>
                            <span class="text-[#484848]">{item}</span>
                        </div>
                        {/each}
                    </div>
            
                </div>
                <div class="flex flex-col mt-4">
                    <span class="text-base font-semibold">Processor and Operating System:</span>
                    <div class="flex flex-col gap-1 ml-2 mt-2">
                        {#each ["Powered by a high-performance processor, our Smart TVs deliver swift and responsive operation.","Seamlessly navigate through menus and apps with the latest smart TV operating systems, ensuring a smooth user experience."] as item }        
                        <div class="flex items-center gap-2">
                            <div>
                                <span class="w-1.5 h-1.5 block rounded-full bg-[#484848]" />
                            </div>
                            <span class="text-[#484848]">{item}</span>
                        </div>
                        {/each}
                    </div>
            
                </div>
                <div class="flex flex-col mt-4">
                    <span class="text-base font-semibold">Connectivity Options:</span>
                    <div class="flex flex-col gap-1 ml-2 mt-2">
                        {#each ["Connect effortlessly to your home network with built-in Wi-Fi functionality.","Enjoy seamless streaming and online content access through Ethernet, Wi-Fi, or Bluetooth connectivity.","Multiple HDMI, USB, and AV ports allow easy connection to external devices such as gaming consoles, Blu-ray players, and sound systems."] as item }        
                        <div class="flex items-center gap-2">
                            <div>
                                <span class="w-1.5 h-1.5 block rounded-full bg-[#484848]" />
                            </div>
                            <span class="text-[#484848]">{item}</span>
                        </div>
                        {/each}
                    </div>
            
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-10">
                <h1 class="text-xl capitalize font-semibold">related products</h1>
                <div class="grid sm:grid-cols-2 min-[618px]:grid-cols-3 min-[812px]:grid-cols-4 min-[1021px]:grid-cols-5 gap-6">
                    {#each new Array(5).fill("") as item }
                        <ProductCard />
                    {/each}
                </div>
            </div>
        </div>
    </Wrapper>

</div>