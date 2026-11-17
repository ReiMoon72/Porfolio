<script setup>
import { ref } from "vue";
import Project1 from "../Project-Folders/Project1.vue";
import Project2 from "../Project-Folders/Project2.vue";

const otherProjectsPopUp = ref(false);

const projectPopUpShow = () => {
  otherProjectsPopUp.value = true;
};
</script>

<template>
  <main>
    <div class="flex justify-around flex-col items-center md:flex-row">
      <Project1 />
      <Project2 />
    </div>
    <!--For Button-->
    <div class="flex items-center justify-center py-15">
      <button
        class="p-2 rounded-md cursor-pointer duration-200 hover:scale-105"
        @click="projectPopUpShow"
      >
        View More Projects
      </button>
    </div>
    <!--The Remaining Projects-->
    <div v-show="otherProjectsPopUp">
      <p>Testing</p>
    </div>
  </main>
</template>
