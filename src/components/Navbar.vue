<template>
  <nav class="nav text-leno-white z-30">
    <div class="flex w-10/12 mx-auto justify-between items-center h-20">
      <h2 class="font-bold">
        <a class="text-leno-white text-3xl"> Leno </a>
      </h2>
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
          <a class="bg-leno-green py-4 px-8 text-leno-darker font-bold"
            >Get Started</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style lang="scss" scoped>
.nav {
  @apply bg-leno-darker sticky top-0;
}
.menus {
  @apply flex space-x-8;
  li {
    a {
      @apply text-base cursor-pointer;
    }
  }
}
</style>
