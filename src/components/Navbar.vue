<script setup>
import { ref } from "vue";

const ViewNavbar = ref(true)

const ShowNavbar = () => {
  ViewNavbar.value = !ViewNavbar.value
}
</script>

<template>
  <nav class="font-inter p-2 bg-darkblue text-white sticky top-0">
    <div class=" flex justify-between items-center flex-col md:flex-row p-2">
      <div class=" flex items-center gap-60">
        <b class="text-3xl">RGP</b>
          <button class=" bg-gray-400 rotate-90 p-2 rounded-sm text-black md:hidden active:bg-red-500 duration-200" @click="ShowNavbar">|||</button>
      </div> 
      <div class=" flex gap-8 font-bold flex-col md:flex-row" v-show="ViewNavbar">
        <button class="cursor-pointer">Home</button>
        <button class="cursor-pointer">About</button>
        <button class="cursor-pointer">Projects</button>
        <button class="cursor-pointer">Skills</button>
        <button class="cursor-pointer">Contact</button>
      </div>
    </div>
  </nav>
</template>
