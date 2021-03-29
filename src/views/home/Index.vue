<template>
  <div id="home-page">
    <div class="big-title bg-leno-darker py-24 h-screen">
      <div class="wrapper h-full">
        <div class="text-center">
          <h1 class="md:text-6xl text-5xl font-bold text-leno-white">
            Invest in brillant Startup
          </h1>
          <div class="mt-7">
            <a
              class="bg-leno-green inline-block py-4 px-8 text-leno-darker font-bold"
              >Get Started</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Video/Image -->
    <div class="bg-leno-dark py-24">
      <div class="wrapper">
        <div class="bg-leno-white w-full md:w-8/12 h-80"></div>
      </div>
    </div>
    <!-- Highlights -->
    <div class="bg-leno-darker py-14">
      <div class="wrapper w-full text-leno-white">
        <div class="md:flex flex-col w-full items-center justify-center">
          <div class="md:w-7/12">
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
            <div class="bg-leno-white box mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-leno-dark py-14">
      <div class="wrapper w-full text-leno-white">
        <div
          class="md:flex flex-col flex-row-reverse w-full items-center justify-between"
        >
          <div class="md:w-7/12 md:ml-auto md:text-left">
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
            <div class="bg-leno-white mx-auto box"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial -->
    <div class="bg-leno-darker text-leno-white py-24">
      <div class="wrapper px-5">
        <div class="md:flex items-center space-x-10">
          <div>
            <p class="text-xl">
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
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply w-9/12 mx-auto flex justify-center items-center;
}
.box {
  width: 90%;
  height: 305px;
}
</style>
