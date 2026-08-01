<script setup>
import { ref } from "vue";
import ImagePicture from "../assets/img/picture.png.jpg";
import { Folder } from "@lucide/vue";
</script>

<template>
  <main class="bg-darkblue p-10 text-white">
    <div class="flex justify-around items-center flex-col md:flex-row">
      <div>
        <img
          :src="ImagePicture"
          alt="Image Profile"
          class="w-70 h-70 rounded-full border-[5px]"
        />
      </div>
      <!--Text-->
      <div class="flex flex-col gap-1">
        <b class="text-[30px]">Hello I'm</b>
        <b class="text-3xl"
          >Reimone Glaire <br />
          M. Palama</b
        >
        <div class="flex items-center justify-evenly gap-10">
          <p class="text-4xl font-bold">5</p>
          <p class="text-4xl font-bold">3</p>
          <p class="text-4xl font-bold">2</p>
        </div>
        <div class="flex items-center justify-evenly gap-3">
          <p>Projects</p>
          <p>Full Stack</p>
          <p>Front-end </p>
        </div>
        <p class="text-[14px]">Aspiring Full Stack Developer</p>
        <p class="text-[14px]">
          And currently Learning how to be Full Stack Developer
        </p>
        <!--For Btn-->
        <div class="flex items-center gap-5">
          <button
            class="flex bg-gray-700 p-2 w-35 justify-between items-center font-bold rounded-sm cursor-pointer"
          >
            <Folder /> Contact Me
          </button>
          <button
            class="flex bg-gray-700 p-2 w-28 justify-between items-center font-bold rounded-sm cursor-pointer"
          >
            <Folder /> Github
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
