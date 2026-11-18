<script setup>
import { ref } from "vue";
import Project1 from "../Project-Folders/Project1.vue";
import Project2 from "../Project-Folders/Project2.vue";
import { ChevronUp, ChevronDown } from "@lucide/vue";
import Project3 from "../Project-Folders/Project3.vue";
import Project4 from "../Project-Folders/Project4.vue";
import Project5 from "../Project-Folders/Project5.vue";
import Project6 from "../Project-Folders/Project6.vue";

const otherProjectsPopUp = ref(false);

const projectPopUpShow = () => {
  otherProjectsPopUp.value = !otherProjectsPopUp.value;
};
</script>

<template>
  <main>
    <div class="flex justify-evenly flex-col items-center md:flex-row">
      <Project1 />
      <Project2 />
    </div>
    <!--For Button-->
    <div class="flex items-center justify-center py-15">
      <button
        class="p-2 rounded-md cursor-pointer duration-200 hover:scale-105 flex gap-2"
        @click="projectPopUpShow"
      >
        View More Projects
        <ChevronUp
          :class="otherProjectsPopUp ? 'rotate-180 duration-200' : 'rotate-0 duration-200'"
        />
      </button>
    </div>
    <!--The Remaining Projects-->
    <div class="" v-show="otherProjectsPopUp">
      <div class="flex justify-evenly items-center flex-col md:flex-row">
        <Project3 />
        <Project4 />
      </div>
      <div class="flex justify-evenly items-center flex-col md:flex-row">
        <Project5 />
        <Project6 />
      </div>
    </div>
  </main>
</template>
