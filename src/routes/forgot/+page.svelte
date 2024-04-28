<script>
	import Wrapper from "$lib/core/Wrapper.svelte";


</script>
<div class="flex flex-col gap-6 h-screen items-center justify-center">
    <Wrapper>
        <div class="rounded-md p-6 max-w-md max-md:mx-auto mx-auto">
            <form class="space-y-6">
              <div class="mb-10">
                <h3 class="text-3xl font-medium">Forget Password</h3>
                <p class="text-sm mt-4">
                  Enter your email address and we will send you a link to reset your password.
                </p>
              </div>
              <div>
                <label for="name" class="text-sm mb-2 block">Email</label>
                <div class="relative flex items-center">
                  <input name="username" type="email" required class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Enter user name" />
                </div>
              </div>
              <div class="!mt-10">
                <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#00325F] focus:outline-none">
                  Forget Password
                </button>
              </div>
              <p class="text-sm !mt-10 text-center">Go back to login <a href="/login" class="text-[#00325F] hover:underline ml-1 whitespace-nowrap">Back</a></p>
            </form>
          </div>
    </Wrapper>
</div>