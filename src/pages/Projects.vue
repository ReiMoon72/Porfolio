<script setup>
import { ref } from "vue";
import SchoolLogo from "../assets/img/SchoolLogo.png";
import WebsiteLogoImg from "../assets/img/WebsiteLogoImg.png";
import logobarber from "../assets/img/logobarber.png";
import Plumbang from "../assets/img/Plumbang.png";
import CafeWebLogo from "../assets/img/CafeWeb.png";
</script>

<template>
  <header class="font-inter p-12">
    <div class="text-center">
      <b class="text-3xl">Projects</b>
      <p class="text-[15px]">This project both have front-end & Full Stack</p>
    </div>
  </header>

  <main class="font-inter p-2">
    <div class=" grid grid-cols-1 grid-rows-2 gap-3 p-2 md:grid-cols-3 place-content-center">
      <!--First Projects-->
      <div class="border-[1px] w-90 rounded-md border-gray-300 flex p-3">
        <img class="w-20" :src="SchoolLogo" alt="SchoolProject" />
        <div class="flex flex-col">
          <p>School Enrrolment System</p>
          <p>Not Been Deployed</p>
          <div class="flex items-center gap-2">
            <p class="w-3 h-3 bg-red-700 rounded-full"></p>
            <p>Unfinish</p>
          </div>
        </div>
      </div>
      <!--Second Project-->
      <div class="border-[1px] w-90 rounded-md border-gray-300 flex p-3">
        <img class="w-20" :src="WebsiteLogoImg" alt="SchoolProject" />
        <div class="flex flex-col">
          <p>Ebarangay Appointment System</p>
          <a
            target="_blank"
            href="https://e-barangay-appointment-system.vercel.app/"
            class="line-clamp-1 cursor-pointer"
            >https://e-barangay-appointment-system.vercel.app/</a
          >
          <div class="flex items-center gap-2">
            <p class="w-3 h-3 bg-green-800 rounded-full"></p>
            <p>Finish</p>
          </div>
        </div>
      </div>
      <!--Third Project-->
      <div class="border-[1px] w-90 rounded-md border-gray-300 flex p-3">
        <img class="w-17" :src="logobarber" alt="SchoolProject" />
        <div class="flex flex-col">
          <p>Ebarangay Appointment System</p>
          <a
            target="_blank"
            href="https://brick-and-blade.vercel.app/"
            class="line-clamp-1 cursor-pointer"
            >https://brick-and-blade.vercel.app/</a
          >
          <div class="flex items-center gap-2">
            <p class="w-3 h-3 bg-green-800 rounded-full"></p>
            <p>Finish</p>
          </div>
        </div>
      </div>
      <!--Fouth Project-->
      <div class="border-[1px] w-90 rounded-md border-gray-300 flex p-3">
        <img class="w-17" :src="Plumbang" alt="SchoolProject" />
        <div class="flex flex-col">
          <p>Ebarangay Appointment System</p>
          <p>Not Been Deployed</p>
          <div class="flex items-center gap-2">
            <p class="w-3 h-3 bg-green-800 rounded-full"></p>
            <p>Finish</p>
          </div>
        </div>
      </div>
      <!--Fifth Project-->
      <div class="border-[1px] w-90 rounded-md border-gray-300 flex p-3">
        <img class="w-17" :src="CafeWebLogo" alt="SchoolProject" />
        <div class="flex flex-col">
          <p>Ebarangay Appointment System</p>
          <p>Not Been Deployed</p>
          <div class="flex items-center gap-2">
            <p class="w-3 h-3 bg-green-800 rounded-full"></p>
            <p>Finish</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
