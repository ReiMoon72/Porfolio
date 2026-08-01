<script setup>
import { Server, CodeXml, Database } from "@lucide/vue";
import { ref } from "vue";

const skills = ["HTML5", "CSS3", "JavaScript", "Vue", "Tailwind CSS"];
</script>

<template>
  <header class="font-inter p-15">
    <div class="text-center">
      <b class="text-3xl">Skils</b>
    </div>
  </header>

  <main class="font-inter p-2">
    <div class="flex justify-between p-3 flex-wrap flex-col md:flex-row">
      <div class="border-[1px] border-gray-300 rounded-xl w-86">
        <div class="flex justify-start items-center gap-3 text-2xl p-5">
          <CodeXml size="35" />
          <b>Frontend</b>
        </div>
        <div class="flex gap-5 flex-wrap p-3 text-white">
          <p class="bg-darkblue w-18 text-center p-1 rounded-full text-[11px]">
            HTML5
          </p>
          <p class="bg-darkblue w-20 text-center p-1 rounded-full text-[11px]">
            CSS3
          </p>
          <p class="bg-darkblue w-23 text-center p-1 rounded-full text-[11px]">
            JavaScript
          </p>
          <p class="bg-darkblue w-18 text-center p-1 rounded-full text-[11px]">
            Vue
          </p>
          <p class="bg-darkblue w-26 text-center p-1 rounded-full text-[11px]">
            Tailwind CSS
          </p>
        </div>
      </div>
      <div class="border-[1px] border-gray-300 rounded-xl w-86">
        <div class="flex justify-start items-center gap-3 text-2xl p-5">
          <CodeXml size="35" />
          <b>Backend</b>
        </div>
        <div class="flex gap-5 flex-wrap p-3 text-white">
          <p class="bg-darkblue w-18 text-center p-1 rounded-full text-[11px]">
            Node.JS
          </p>
          <p class="bg-darkblue w-20 text-center p-1 rounded-full text-[11px]">
            Express.JS
          </p>
          <p class="bg-darkblue w-23 text-center p-1 rounded-full text-[11px]">
            RESTFUL APi
          </p>
        </div>
      </div>
      <div class="border-[1px] border-gray-300 rounded-xl w-86">
        <div class="flex justify-start items-center gap-3 text-2xl p-5">
          <CodeXml size="35" />
          <b>Datebase & Tools</b>
        </div>
        <div class="flex gap-5 flex-wrap p-3 text-white">
          <p class="bg-darkblue w-18 text-center p-1 rounded-full text-[11px]">
            MySQL
          </p>
          <p class="bg-darkblue w-20 text-center p-1 rounded-full text-[11px]">
            SSMS
          </p>
          <p class="bg-darkblue w-23 text-center p-1 rounded-full text-[11px]">
            Git
          </p>
          <p class="bg-darkblue w-18 text-center p-1 rounded-full text-[11px]">
            Github
          </p>
          <p class="bg-darkblue w-20 text-center p-1 rounded-full text-[11px]">
            VS Code
          </p>
        </div>
      </div>
    </div>
  </main>

  <header class="font-inter py-5 py-10">
    <div class="text-center">
      <b class="text-3xl">Soft Skills</b>
    </div>
  </header>

  <main class="font-inter">
    <div class="text-white flex justify-center items-center flex-col md:flex-row gap-5 p-5">
      <p class="bg-darkblue w-23 text-center p-1 rounded-full text-[11px]">
        Communication
      </p>
      <p class="bg-darkblue w-20 text-center p-1 rounded-full text-[11px]">
        Team work
      </p>
      <p class="bg-darkblue w-25 text-center p-1 rounded-full text-[11px]">
        Problem Solving
      </p>
      <p class="bg-darkblue w-29 text-center p-1 rounded-full text-[11px]">
        Attention to details
      </p>
      <p class="bg-darkblue w-20 text-center p-1 rounded-full text-[11px]">
        Creativity
      </p>
    </div>
  </main>
</template>
