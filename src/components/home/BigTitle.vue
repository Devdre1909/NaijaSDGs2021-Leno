<template>
  <div class="big-title overflow-hidden bg-leno-darker h-screen relative">
    <div class="absolute inset-0 shape-humans">
      <img
        class="absolute image2"
        src="../../assets/svgs/shape-pink.svg"
        alt="shape"
      />
      <img
        class="absolute image1"
        src="../../assets/images/image1.png"
        alt="human"
      />

      <img
        class="absolute image4"
        src="../../assets/svgs/shape-green.svg"
        alt="shape"
      />
      <img
        class="absolute image3"
        src="../../assets/images/image2.png"
        alt="human"
      />
      <img
        class="absolute image5"
        src="../../assets/images/image3.png"
        alt="human"
      />

      <img
        class="absolute image7"
        src="../../assets/svgs/shape-teal.svg"
        alt="shape"
      />
      <img
        class="absolute image6"
        src="../../assets/images/image4.png"
        alt="human"
      />
    </div>
    <div class="wrapper h-full relative">
      <div class="text-center z-20">
        <h1 class="md:text-6xl text-5xl max-w-lg font-bold text-leno-white">
          Invest in brillant startups
        </h1>
        <div class="mt-7 text-center">
          <ButtonVue class="mx-auto"> Get Started </ButtonVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonVue from "../utils/Button.vue";

export default defineComponent({
  name: "BigTitle",
  components: {
    ButtonVue,
  },
});
</script>

<style lang="scss" scoped>
.image1 {
  left: 162px;
  top: 33px;
}

.image2 {
  left: 46px;
  top: 40px;
}

.image4 {
  right: 41px;
  top: 151px;
}

.image3 {
  top: 80px;
  right: 233px;
}

.image5 {
  right: 200px;
  bottom: 99px;
}

.image6 {
  bottom: 200px;
  left: 218px;
}

.image7 {
  left: 30px;
  bottom: 60px;
}
</style>
