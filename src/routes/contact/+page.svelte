<script>
	import Wrapper from '$lib/core/Wrapper.svelte';
</script>

<Wrapper>
	<div class="grid sm:grid-cols-2 gap-10 bg-white rounded-3xl px-8 py-32">
		<div class="flex flex-col gap-4">
			<p
				class="font-semibold sm:w-[80%] text-[24px] sm:text-[32px] w-fit leading-[40px] my-4 capitalize"
			>
				We are happy to help you or answer any questions you may have
			</p>
			<p class="text-[#00092989] text-lg">
				You will receive a response within 24 hours. If you need a quicker response on your email,
				please explore the website
			</p>
		</div>
		<div class="flex flex-col sm:grid sm:grid-cols-2 gap-5 h-fit">
			<div class="rounded-lg bg-[#F5F5F5] px-4 py-3 flex items-center justify-between w-full">
				<input
					type="text"
					class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#5c5c5cc7] placeholder:capitalize w-full"
					placeholder="Write your full name"
				/>
			</div>
			<div class="rounded-lg !bg-[#F5F5F5] px-4 py-3 flex items-center justify-between w-full">
				<input
					type="email"
					class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#5c5c5cc7] placeholder:capitalize w-full"
					placeholder="Write your email"
				/>
			</div>
			<div
				class="rounded-lg col-span-2 bg-[#F5F5F5] px-4 py-3 flex items-center justify-between w-full"
			>
				<textarea
					class="bg-transparent h-40 outline-none border-none text-[#5C5C5C] placeholder:text-[#5c5c5cc7] placeholder:capitalize w-full"
					placeholder="write your  message"
				></textarea>
			</div>
			<div class="md:w-[90%] w-full">
				<button
					class="text-white sm:w-auto w-full py-2 sm:px-12 font-light sm:py-3 rounded-[8px] sm:rounded-[12px] bg-[#00325F]"
					>Send A Message</button
				>
			</div>
		</div>
	</div>
</Wrapper>
