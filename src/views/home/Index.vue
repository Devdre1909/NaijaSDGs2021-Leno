<template>
  <div id="home-page">
    <!-- Big title -->
    <big-title />
    <!-- Video/Image -->
    <div class="bg-leno-dark py-24">
      <div class="wrapper">
        <div class="bg-leno-white w-full md:w-8/12 h-80"></div>
      </div>
    </div>
    <!-- Highlights -->
    <highlights />
    <!-- Testimonial -->
    <div class="bg-leno-darker text-leno-white py-24">
      <div class="wrapper px-5">
        <div class="md:flex items-center space-x-10">
          <div>
            <p class="md:text-2xl text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              id mauris, imperdiet euismod eget. Adipiscing quam nulla volutpat
              vel, pretium cras eu ultricies. At integer sed amet imperdiet at
              vestibulum. Vulputate libero, viverra gravida dictum ultricies
              dignissim diam arcu, sit. Tincidunt accumsan tristique quis donec.
              Id elit massa eu nunc lectus id.“
            </p>
          </div>
          <div class="relative mt-5 md:mt-0">
            <div class="bg-leno-white rounded-full w-44 h-44"></div>
            <div
              class="bg-white w-24 h-16 absolute -right-3 -bottom-3 shadow-md"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hightlight social -->
    <div class="bg-leno-dark text-leno-white py-24">
      <div class="w-9/12 mx-auto flex justify-start items-center">
        <div class="w-full">
          <h4
            class="text-leno-white text-left mb-10 font-semibold text-2xl md:text-3xl"
          >
            Helped 347 growing companies secure funding
          </h4>
          <div class="flex flex-wrap">
            <div
              v-for="n in 6"
              :key="n"
              class="md:w-36 w-32 h-14 bg-leno-white m-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BigTitle from "@/components/home/BigTitle.vue";
import Highlights from "@/components/home/Highlights.vue";

export default defineComponent({
  name: "Index",
  components: { BigTitle, Highlights },
});
</script>
