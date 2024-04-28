<script>
	import Wrapper from "$lib/core/Wrapper.svelte";


</script>
<div class="flex flex-col gap-6 h-screen items-center justify-center">
    <Wrapper>
        <div class="rounded-md p-6 max-w-md max-md:mx-auto mx-auto">
            <form class="space-y-6">
              <div class="mb-10">
                <h3 class="text-3xl font-medium">Sign in</h3>
                <p class="text-sm mt-4">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
              </div>
              <div>
                <label for="name" class="text-sm mb-2 block">User name</label>
                <div class="relative flex items-center">
                  <input name="username" type="text" required class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Enter user name" />
                </div>
              </div>
              <div>
                <label for="password" class="text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Enter password" />
                </div>
              </div>
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-[#00325F] focus:ring-blue-500 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a href="/forgot" class="text-[#00325F] hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div class="!mt-10">
                <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#00325F] focus:outline-none">
                  Log in
                </button>
              </div>
              <p class="text-sm !mt-10 text-center">Don't have an account <a href="/register" class="text-[#00325F] hover:underline ml-1 whitespace-nowrap">Register here</a></p>
            </form>
          </div>
    </Wrapper>
</div>