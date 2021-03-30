<template>
  <div id="auth" class="px-32 h-screen py-14 bg-gray-200">
    <div class="grid grid-cols-1 md:grid-cols-2 h-full">
      <div
        class="h-full bg-leno-darker flex flex-col items-start justify-center px-10"
      >
        <h2 class="text-leno-white text-3xl uppercase font-bold">LENO</h2>
        <div class="text-leno-white flex text-base font-semibold space-x-3">
          <span>Easy</span>
          <img src="../assets/svgs/white-dot.svg" alt="" />
          <span>Fast</span>
          <img src="../assets/svgs/white-dot.svg" alt="" />
          <span>Safe</span>
        </div>
        <div class="buttons">
          <button class="full-btns">Continue With Facebook</button>
          <button class="full-btns">Continue With Twitter</button>
          <button class="bordered-btns">Continue With Google</button>
        </div>
        <brand small class="mt-10" />
      </div>
      <div
        class="h-full bg-white flex flex-col items-start justify-center w-full overflow-y-scroll"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Brand from "@/components/utils/Brand.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Auth",
  components: { Brand },
});
</script>

<style lang="scss" scoped>
.buttons {
  @apply mt-10 flex-col space-y-4 w-full;
  .full-btns {
    @apply bg-leno-green py-4 block w-8/12 uppercase font-semibold text-base duration-75;
  }
  .full-btns:hover {
    @apply bg-leno-darker text-leno-green border-2 border-leno-green;
  }
  .bordered-btns {
    @apply bg-leno-darker text-leno-green border-2 border-leno-green py-4 block w-8/12 uppercase font-semibold text-base;
  }
  .bordered-btns:hover {
    @apply bg-leno-green text-leno-dark;
  }
}
</style>
