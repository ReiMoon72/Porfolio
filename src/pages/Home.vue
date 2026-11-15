<script setup>
import { ref } from "vue";
import HomeHeader from "../UI-Components/HomeHeader.vue";
import HomeText from "../UI-Components/HomeText.vue";
</script>

<template>
  <main class="bg-darkblue md:h-110 p-10 text-white" id="HomeID">
    <div
      class="flex justify-around items-center flex-col md:flex-row"
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-offset="100"
    >
      <HomeHeader />
      <HomeText />
    </div>
  </main>
</template>
