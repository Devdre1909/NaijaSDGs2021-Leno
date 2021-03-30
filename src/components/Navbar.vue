<template>
  <nav class="nav text-leno-white z-30 border-b-2 border-leno-dark shadow-md">
    <div class="flex w-10/12 mx-auto justify-between items-center h-20">
      <brand />
      <ul class="menus">
        <li>
          <a>Explore StartUps</a>
        </li>
        <li>
          <a>Raise Funds</a>
        </li>
        <li>
          <a>Login</a>
        </li>
        <li>
          <ButtonVue :show_icon="false" size="small">Get Started</ButtonVue>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Brand from "./utils/Brand.vue";
import ButtonVue from "./utils/Button.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    ButtonVue,
    Brand,
  },
});
</script>

<style lang="scss" scoped>
.nav {
  @apply bg-leno-darker sticky top-0;
}
.menus {
  @apply space-x-8 hidden md:flex items-center;
  li {
    a {
      @apply text-base cursor-pointer;
    }
  }
}
</style>
