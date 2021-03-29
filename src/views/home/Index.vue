<template>
  <div id="home-page">
    <div class="big-title bg-leno-darker py-24 h-screen">
      <div class="wrapper h-full">
        <div class="text-center">
          <h1 class="text-6xl font-bold text-leno-white">
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
        <div class="bg-leno-white w-8/12 h-80"></div>
      </div>
    </div>
    <!-- Highlights -->
    <div class="bg-leno-darker py-14">
      <div class="wrapper w-full text-leno-white">
        <div class="flex w-full items-center justify-center">
          <div class="w-7/12">
            <h3 class="font-bold text-5xl">Get access to funding</h3>
            <p class="text-3xl text-leno-white mt-4 tracking-wide leading-9">
              Possibility.
              <span class="opacity-60">
                We make it possible for students to raise funds for their
                startup or business.
              </span>
            </p>
          </div>
          <div class="w-5/12">
            <div class="bg-leno-white box mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-leno-dark py-14">
      <div class="wrapper w-full text-leno-white">
        <div class="flex flex-row-reverse w-full items-center justify-between">
          <div class="w-7/12 ml-auto text-left">
            <h3 class="font-bold text-5xl">Invest in startups</h3>
            <p
              class="text-3xl text-left text-leno-white mt-4 tracking-wide leading-9"
            >
              Accessibility.
              <span class="opacity-60">
                You can now access and invest in a vast pool of innovative
                startups from brilliant student founders around the world.
              </span>
            </p>
          </div>
          <div class="w-5/12">
            <div class="bg-leno-white mx-auto box"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial -->
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
