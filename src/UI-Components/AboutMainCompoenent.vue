<script setup>
import { ref } from "vue";
</script>

<template>
  <main class="font-inter p-2">
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
    </div>
  </main>
</template>
