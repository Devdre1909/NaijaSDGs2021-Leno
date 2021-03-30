<template>
  <button
    :class="`bg-leno-green text-leno-darker font-bold flex items-center ${
      show_icon ? 'justify-between' : 'justify-center'
    } ${
      show_icon === false
        ? 'w-32 h-12'
        : size === 'small'
        ? 'w-48 px-6 h-12'
        : size === 'medium'
        ? 'w-52 h-14 px-8'
        : size === 'large'
        ? 'w-56 h-14 px-8'
        : ''
    }`"
  >
    <slot></slot>
    <img
      v-if="show_icon"
      src="../../assets/svgs/forward-arrow.svg"
      alt="arrow-forward"
    />
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AButton",
  props: {
    show_icon: {
      type: Boolean,
      default: () => true,
    },
    /** size
     *  Determins how big the button will be
     */
    size: {
      type: String,
      default: "medium",
      validator: (val) => ["large", "medium", "small"].indexOf(val) !== -1,
    },
  },
});
</script>

<style lang="scss" scoped>
button:hover {
  img {
    animation-name: swiper;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
}

@keyframes swiper {
  0% {
    opacity: 0.2;
    transform: scale(0.3);
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: scale(0.9);
    transform: translateX(10px);
  }
}
</style>
