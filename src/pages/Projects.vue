<script setup>
import { ref } from "vue";
import SchoolLogo from "../assets/img/SchoolLogo.png";
import Plumbang from "../assets/img/Plumbang.png";
import CafeWebLogo from "../assets/img/CafeWeb.png";
import ProjectPage from "../UI-Components/ProjectPage.vue";
</script>

<template>
  <header class="font-inter p-12">
    <div class="text-center">
      <b class="text-3xl">Projects</b>
      <p class="text-[15px]">This project both have front-end & Full Stack</p>
    </div>
  </header>

  <main
    class="font-inter p-2"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-offset="100"
    id="ProjectUp"
  >
  <ProjectPage />
  </main>
</template>
