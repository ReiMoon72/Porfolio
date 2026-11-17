<script setup>
import { ref } from "vue";
import WebsiteLogoImg from "../assets/img/WebsiteLogoImg.png";

</script>

<template>
  <main
    class="font-inter p-2 hover:scale-105 ease-in-out duration-200 cursor-pointer w-fit"
  >
    <div class="shadow-2xl w-fit h-[19.8vw] rounded-md">
      <div class="bg-gray w-full rounded flex items-center justify-center p-2">
        <img class="w-30" :src="WebsiteLogoImg" alt="" />
      </div>
      <div class="p-2 flex flex-col gap-[10px]">
        <b>Barangay Appointments E-System</b>
        <b>
          Status:
          <span class="font-normal">🟢Finish</span>
        </b>
        <p>
          Deploy:
          <a
            class="underline underline-offset-5 hover:text-blue-900"
            target="_blank "
            href="https://e-barangay-appointment-system.vercel.app/"
            >Live App</a
          >
        </p>
        <button class="font-inter cursor-pointer bg-gray text-white p-1 w-fit rounded">Know More About This Project</button>
      </div>
    </div>
  </main>
</template>
