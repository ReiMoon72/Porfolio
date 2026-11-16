<script setup>
import { Server, CodeXml, Database } from "@lucide/vue";
import { ref } from "vue";
import SkillInfiniteLoop from "../UI-Components/SkillInfiniteLoop.vue";

const skills = ["HTML5", "CSS3", "JavaScript", "Vue", "Tailwind CSS"];
</script>

<template>
  <header class="font-inter p-15" data-aos="fade-up" data-aos-duration="800">
    <div class="text-center">
      <b class="text-3xl">Skils</b>
      <p class="text-[13px]">
        Tools and technologies i used to build a clean, <br />
        Functioning, and efficient Website.
      </p>
    </div>
  </header>

  <main
    class="font-inter p-2"
    data-aos="fade-up"
    data-aos-duration="700"
    id="SkillsScrollUp"
  >
  <SkillInfiniteLoop />
  </main>
</template>
