<script setup>
import { MapPin, University } from "@lucide/vue";
import { ref } from "vue";
import AboutComponent from "../UI-Components/AboutComponent.vue";
import AboutMainCompoenent from "../UI-Components/AboutMainCompoenent.vue";
</script>

<template>
  <header
    class="font-inter px-6 py-10 md:p-12"
    data-aos="fade-up"
    id="AboutScool"
  >
    <div class="text-center">
      <b class="text-3xl">About Me</b>
    </div>
  </header>

  <!--Main-->
  <main
    class="font-inter p-2"
    data-aos="fade-up"
    data-aos-duration="700"
    data-aos-offset="200"
  >
    <div class="flex justify-around">
      <AboutComponent />
      <AboutMainCompoenent />
    </div>
  </main>
</template>
