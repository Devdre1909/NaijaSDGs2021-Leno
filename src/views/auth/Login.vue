<template>
  <div class="w-8/12 mx-auto py-5">
    <h2
      class="uppercase text-xl tracking-wide text-leno-darker font-medium mb-7"
    >
      sign in to account
    </h2>
    <div class="form-control">
      <label>Username</label>
      <input type="text" class="border" />
    </div>
    <div class="form-control">
      <label>Password</label>
      <input type="text" class="border" />
    </div>
    <div class="mt-10">
      <button
        class="uppercase py-3 rounded font-semibold text-center bg-leno-darker text-white w-full"
      >
        Sign in
      </button>
      <div class="text-center my-10 font-semibold">
        <router-link class="text-leno-darker text-sm" to="/"
          >Forget Password?</router-link
        >
        <p class="text-leno-darker text-sm">
          Don't have an account yet?
          <router-link class="text-gray-400" :to="{ name: 'Register' }"
            >Sign Up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Login",
});
</script>

<style lang="scss" scoped>
.form-control {
  @apply mb-4 w-full;
  label {
    display: block;
    @apply mb-1 font-semibold;
  }
  input {
    display: block;
    @apply border border-gray-400 py-2 h-10 px-2 rounded w-full bg-gray-100 focus:outline-none text-sm;
  }
}
</style>
