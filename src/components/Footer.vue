<template>
  <footer class="footer py-7 bg-leno-darker">
    <div class="w-10/12 mx-auto flex">
      <div class="w-7/12 flex items-center">
        <div>
          <h3 class="font-bold text-5xl text-leno-white">
            Secure your future with us
          </h3>
          <div class="mt-7">
            <a
              class="bg-leno-green inline-block py-4 px-8 text-leno-darker font-bold"
              >Get Started</a
            >
          </div>
        </div>
      </div>
      <div class="w-5/12">
        <div class="circle bg-leno-white"></div>
      </div>
    </div>
    <div class="text-leno-white footer-list">
      <div>
        <div></div>
        <h3 class="font-bold text-xl">Secure your feature</h3>
      </div>
      <div>
        <h3 class="">Product</h3>
        <div class="text-leno-white text-opacity-60">
          <a>For Idea Owners</a>
          <a>For Student Investors</a>
        </div>
      </div>
      <div>
        <h3>Company</h3>
        <div class="text-leno-white text-opacity-60">
          <a>About</a>
        </div>
      </div>
      <div>
        <h3>Resources</h3>
        <div class="text-leno-white text-opacity-60">
          <a>FAQ</a>
          <a>Contact</a>
        </div>
      </div>
      <div class="col-span-4">
        <hr class="text-opacity-60 text-leno-white" />
      </div>
    </div>
    <div
      class="w-10/12 text-leno-white mx-auto pt-8 pb-4 grid grid-cols-4 gap-5 opacity-80"
    >
      <div class="">
        <h4>{{ new Date().getFullYear() }} Leno</h4>
      </div>
      <div>Privary Policy</div>
      <div>Term of Use</div>
      <div></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss" scoped>
.circle {
  border: 100%;
  width: 350px;
  height: 350px;
  @apply rounded-full;
}
.footer-list {
  @apply w-10/12 mx-auto  grid grid-cols-4 gap-5 mt-20;
  & > div {
    h3 {
      @apply text-base uppercase font-bold mb-3 tracking-wide;
    }
    div {
      @apply flex flex-col text-sm;
    }
  }
}
</style>
