<template>
  <div class="highlights">
    <div class="bg-leno-darker py-16">
      <div class="wrapper w-full text-leno-white">
        <div
          class="md:flex md:flex-row flex-col w-full items-center justify-center"
        >
          <div class="md:w-7/12 px-4">
            <h3 class="font-bold text-4xl md:text-5xl">
              Get access to funding
            </h3>
            <p
              class="text-2xl md:text-3xl text-leno-white mt-4 tracking-wide leading-9"
            >
              Possibility.
              <span class="opacity-60">
                We make it possible for students to raise funds for their
                startup or business.
              </span>
            </p>
          </div>
          <div class="md:w-5/12 mt-5 md:mt-0">
            <div class="bg-leno-white box w-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-leno-dark py-16">
      <div class="wrapper w-full text-leno-white">
        <div
          class="md:flex flex-col md:flex-row-reverse w-full items-center justify-between"
        >
          <div class="md:w-7/12 md:ml-auto px-4 md:text-left">
            <h3 class="font-bold text-4xl md:text-5xl">Invest in startups</h3>
            <p
              class="text-2xl md:text-3xl text-left text-leno-white mt-4 tracking-wide leading-9"
            >
              Accessibility.
              <span class="opacity-60">
                You can now access and invest in a vast pool of innovative
                startups from brilliant student founders around the world.
              </span>
            </p>
          </div>
          <div class="md:w-5/12 md:mt-4">
            <div class="bg-leno-white w-full box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Highlights",
});
</script>

<style lang="scss" scoped>
.box {
  width: 90%;
  height: 305px;
}
</style>
