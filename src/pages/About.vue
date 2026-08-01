<script setup>
import { MapPin, University } from "@lucide/vue";
import { ref } from "vue";
</script>

<template>
  <header class="font-inter px-6 py-10 md:p-12">
    <div class="text-center">
      <b class="text-3xl">About Me</b>
    </div>
  </header>

  <!--Main-->
  <main class="font-inter">
    <div
      class="flex flex-col md:flex-row justify-around items-start md:items-center gap-10 px-5 md:px-0"
    >
      <div class="break-words w-full max-w-[600px]">
        <b class="text-[20px]">Who I Am?</b>
        <p><br /></p>
        <p>
          I'm Dedicated Web Developer and a Student taking Bachelor Of Science
          in Information Technology, Creating E-commers website that helps or
          can help people to make their life more easier. My Passion on Coding,
          Problem Solving, and Team Participitation on project.
        </p>
        <br />
        <p>
          With Strong foundation with Front-end Kinda in Back-end same as
          Database, I'm Very Excited to make more project and contribute. I
          thrive in collaborative environments and continuously seek to expand
          my technical skills and knowledge.
        </p>
        <br />
        <!--Location-->
        <div class="flex flex-col gap-2">
          <p class="flex items-start gap-2">
            <MapPin class="shrink-0 mt-1" />
            <span>Calaman, Laguna, Philippines</span>
          </p>
          <p class="flex items-start gap-2">
            <University class="shrink-0 mt-1" />
            <span>Bachelor Of Science in Information Technology</span>
          </p>
        </div>
      </div>
      <div class="w-full max-w-[600px]">
        <b class="text-[20px]">What Can I do?</b>
        <p><br /></p>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <p
              class="bg-gray-800 w-6 h-6 text-white rounded-full flex items-center justify-center"
            >
              1
            </p>
            <p class="font-black">Front-End Developer</p>
          </div>
          <div class="break-words w-full max-w-[500px]">
            <p class="text-gray-600 p-2">
              Building UI and Responsive UI for Mobile and Desktop Websites
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <p
              class="bg-gray-800 w-6 h-6 text-white rounded-full flex items-center justify-center"
            >
              2
            </p>
            <p class="font-black">Full Stack Developer</p>
          </div>
          <div class="break-words w-full max-w-[500px]">
            <p class="text-gray-600 p-2">
              Building Responsive Website Along side with UI and Combining it
              with Backend
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <p
              class="bg-gray-800 w-6 h-6 text-white rounded-full flex items-center justify-center"
            >
              3
            </p>
            <p class="font-black">Web Design</p>
          </div>
          <div class="break-words w-full max-w-[500px]">
            <p class="text-gray-600 p-2">
              Creating modern web design for desining my projects.
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <p
              class="bg-gray-800 w-6 h-6 text-white rounded-full flex items-center justify-center"
            >
              4
            </p>
            <p class="font-black">Team Cooperative</p>
          </div>
          <div class="break-words w-full max-w-[500px]">
            <p class="text-gray-600 p-2">
              Strong team player commited to contribute to the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
