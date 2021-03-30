<template>
  <router-link to="/" class="font-bold flex space-x-3">
    <img src="../../assets/brand.svg" />
    <span
      :class="`text-leno-white font-bold ${
        small === true ? 'text-2xl' : 'text-3xl'
      }`"
    >
      Leno
    </span>
  </router-link>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Brand",
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style></style>
