<script setup>
import { ref } from "vue";
import Plumbang from "../assets/img/Plumbang.png";
</script>

<template>
  <main
    class="font-inter p-2 hover:scale-105 ease-in-out duration-200 cursor-pointer w-fit"
  >
    <div class="shadow-2xl w-fit rounded-md">
      <div class="bg-gray w-full rounded flex items-center justify-center p-2">
        <img class="w-30" :src="Plumbang" alt="" />
      </div>
      <div class="p-2 flex flex-col gap-1">
        <b>Plumbang: Plumming Website <br /> Service</b>
        <b>
          Status:
          <span class="font-normal">🟢 Finish</span>
        </b>
        <b>Category: <span class="font-normal">Front-End</span></b>
        <p>Deploy: Not Deployed</p>
        <button
          class="font-inter cursor-pointer bg-gray text-white p-1 w-fit rounded"
        >
          Know More About This Project
        </button>
      </div>
    </div>
  </main>
</template>
