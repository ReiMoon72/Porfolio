<script setup>
import { ref } from "vue";

const ViewNavbar = ref(true);

const ShowNavbar = () => {
  ViewNavbar.value = !ViewNavbar.value;
};

//Scroll

const HomeScroolUp = (id) => {
  const HomeScrrolUp = document.getElementById(id);
  if (HomeScrrolUp) {
    HomeScrrolUp.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const AboutScroolUp = (id) => {
  const AboutScroolUp = document.getElementById(id);
  if (AboutScroolUp) {
    AboutScroolUp.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const SkillsUp = (id) => {
  const SkillsScrollUp = document.getElementById(id);
  if (SkillsScrollUp) {
    SkillsScrollUp.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const ProjectsScrollUp = (id) => {
  const ProjectUp = document.getElementById(id);
  if (ProjectUp) {
    ProjectUp.scrollIntoView({
      behavior: 'smooth', 
      block: 'center'
    });
  }
};

const ContactScrollUp = (id) => {
  const ContactIDScroll = document.getElementById(id); 
  if(ContactIDScroll) {
    ContactIDScroll.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center'
    })
  }
}
</script>

<template>
  <nav class="border-b font-inter p-2 bg-darkblue text-white sticky top-0 z-50">
    <div class="flex justify-between items-center flex-col md:flex-row p-2">
      <div class="flex items-center gap-60">
        <b class="text-2xl">RGP</b>
        <button
          class="bg-gray-400 rotate-90 p-2 rounded-sm text-black md:hidden active:bg-gray-500 duration-200"
          @click="ShowNavbar"
        >
          |||
        </button>
      </div>
      <div
        class="flex gap-8 p-2 font-bold flex-col md:flex-row"
        v-show="ViewNavbar"
      >
        <button class="cursor-pointer" @click="HomeScroolUp('HomeID')">
          Home
        </button>
        <button class="cursor-pointer" @click="AboutScroolUp('AboutScool')">
          About
        </button>
        <button class="cursor-pointer" @click="ProjectsScrollUp('ProjectUp')">
          Projects
        </button>
        <button class="cursor-pointer" @click="SkillsUp('SkillsScrollUp')">
          Skills
        </button>
        <button class="cursor-pointer" @click="ContactScrollUp('ContactIDScroll')">Contact</button>
      </div>
    </div>
  </nav>
</template>
