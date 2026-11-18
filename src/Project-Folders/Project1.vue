<script setup>
import { ref } from "vue";
import logobarber from "../assets/img/logobarber.png";
</script>

<template>
  <main
    class="font-inter p-2 hover:scale-105 ease-in-out duration-200 cursor-pointer w-fit"
  >
    <div class="shadow-2xl w-fit rounded-md">
      <div class="bg-gray w-full rounded flex items-center justify-center p-2">
        <img class="w-30" :src="logobarber" alt="" />
      </div>
      <div class="p-2 flex flex-col gap-1">
        <b>Rick & Blade Barber Shop Website</b>
        <b>
          Status:
          <span class="font-normal">🟢Finish</span>
        </b>
        <b>Category: <span class="font-normal">Full Stack</span></b>
        <p>
          Deploy:
          <a
            class="underline underline-offset-5 hover:text-blue-900"
            target="_blank "
            href="https://brick-and-blade.vercel.app/"
            >Live App</a
          >
        </p>
        <button
          class="font-inter cursor-pointer bg-gray text-white p-1 w-fit rounded"
        >
          Know More About This Project
        </button>
      </div>
    </div>
  </main>
</template>
