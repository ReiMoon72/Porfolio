<script setup>
import { ref } from "vue";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook-tag.svg";
import { Mail, ArrowUp } from "@lucide/vue";
</script>

<template>
  <footer class="font-inter p-2 bg-UltraDarkBlue text-white">
    <div class="flex justify-between items-center p-2 flex-col gap-5 md:flex-row">
      <div class="flex items-center gap-3">
        <div>
          <p
            class="border-[1px] w-7 h-7 text-2xl flex items-center justify-center rounded-full"
          >
            ©
          </p>
        </div>
        <div>
          <p>2026 Reimone Palama</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <!--Links-->
      <div class="flex items-center gap-3">
        <a
          class="border-[2px] p-[3px] rounded-full" 
          target="_blank"
          href="https://github.com/ReiMoon72"
        >
          <img class="bg-white p-0.5 rounded-full" :src="github" alt="Github" />
        </a>
        <a
          class="border-[2px] p-[3px] rounded-full"
          target="_blank"
          href="https://www.facebook.com/reimone.palama"
        >
          <img
            class="bg-white p-0.5 rounded-full"
            :src="facebook"
            alt="Github"
          />
        </a>
        <a
          class="border-[2px] p-[3px] rounded-full"
          target="_blank"
          href="rhelpalma6@gmail.com"
        >
          <Mail class="bg-white p-0.5 rounded-full" color="black" size="28" />
        </a>
      </div>
      <!--Back To Top-->
      <div class="cursor-pointer" @click="ClickBackToTop">
        <div class=" flex items-center gap-3">
          <ArrowUp size="35" class="border-[1px] p-1 rounded-full cursor-pointer" />
          <div>
            <p>Back To Top</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
