<template>
  <div id="home">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style lang="scss" scoped>
.menus {
  @apply flex space-x-8;
  li {
    a {
      @apply text-base cursor-pointer;
    }
  }
}
</style>
