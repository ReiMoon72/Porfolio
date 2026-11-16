<script setup>
import VueImageSVG from "../assets/icons/vueSVG.svg";
import JavaScript from "../assets/icons/js.svg";
import NodeJS from "../assets/icons/node.svg";
import MSSQL from "../assets/icons/mssql.svg";
import Tailwinds from "../assets/icons/Tailwind.svg";
import Express from "../assets/icons/express.svg";

const technoogyUsed = [
  { name: "Vue JS", icon: VueImageSVG },
  { name: "JavaScript", icon: JavaScript },
  { name: "Node JS", icon: NodeJS },
  { name: "MSSQL", icon: MSSQL },
  { name: "Tailwind CSS", icon: Tailwinds },
  { name: "Express JS", icon: Express },
];
</script>

<template>
  <main class="w-full overflow-hidden py-5">
    <div class="flex w-max animate-loopTechnology">
      <!-- Two identical groups -->
      <div
        v-for="group in 2"
        :key="group"
        class="flex shrink-0 items-center gap-12 px-6 marquee-group"
        :aria-hidden="group === 2"
      >
        <div
          v-for="tech in technoogyUsed"
          :key="tech.name"
          class="flex shrink-0 flex-col items-center gap-3"
        >
          <img
            class="h-10 w-10 object-contain"
            :src="tech.icon"
            :alt="tech.name"
          />

          <span class="whitespace-nowrap text-[16px] font-medium">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.animate-loopTechnology {
  animation: loopTechnology 25s linear infinite;
}

.marquee-group {
  width: max-content;
  min-width: 100vw;
  justify-content: space-around;
}

@keyframes loopTechnology {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
