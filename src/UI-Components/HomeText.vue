<script setup>
import { ref } from "vue";
import { Folder } from "@lucide/vue";
import github from "../assets/icons/github-white.svg";
</script>

<template>
  <main class="font-inter p-2">
    <!--Text-->
    <div class="flex flex-col gap-1">
      <b class="text-[35px]">Reimone Glaire M. <br />Palama</b>
      <div class="flex items-center justify-evenly gap-10">
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">6</p>
          <p>Projects</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">4</p>
          <p>Full Stack</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">2</p>
          <p>Front-End</p>
        </div>
      </div>
      <p class="text-[14px]">Aspiring Full Stack Developer</p>
      <p class="text-[14px]">
        And currently Learning how to be Full Stack Developer
      </p>
      <!--For Btn-->
      <div class="flex items-center gap-5">
        <button
          class="flex bg-skyblue p-2 w-35 justify-between items-center rounded-sm cursor-pointer hover:bg-hoversky duration-200 ease-in"
        >
          <Folder /> Contact Me
        </button>
        <button
          class="flex bg-skyblue p-2 w-30 justify-evenly gap-4 items-center text-[17px] rounded-sm cursor-pointer hover:bg-hoversky duration-200 ease-in"
        >
          <img class="" :src="github" alt="Github" />
          <a target="_blank" href="https://github.com/ReiMoon72">Github</a>
        </button>
      </div>
    </div>
  </main>
</template>
