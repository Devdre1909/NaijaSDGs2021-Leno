<template>
  <div class="w-8/12 mx-auto mt-5 py-5">
    <h2
      class="uppercase text-xl tracking-wide text-leno-darker font-medium mb-5"
    >
      create new account
    </h2>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-x-5">
      <div class="form-control">
        <label>First name </label>
        <input type="text" class="border" />
      </div>
      <div class="form-control">
        <label>Last name</label>
        <input type="text" class="border" />
      </div>
    </div>
    <div class="form-control">
      <label>Email</label>
      <input type="text" class="border" />
    </div>
    <div class="form-control">
      <label>Password</label>
      <input type="text" class="border" />
    </div>
    <div class="form-control">
      <label>Confirm Password</label>
      <input type="text" class="border" />
    </div>
    <div class="mt-10">
      <button
        class="uppercase py-3 rounded font-semibold text-center bg-leno-darker text-white w-full"
      >
        create account
      </button>
      <div class="text-center my-5 font-semibold">
        <router-link class="text-leno-darker text-sm" to="/"
          >Forget Password?</router-link
        >
        <p class="text-leno-darker text-sm">
          I have an account.
          <router-link class="text-gray-400" :to="{ name: 'Login' }"
            >Sign In</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Register",
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
