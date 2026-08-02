<script setup>
import { Mail, Phone, MapPin } from "@lucide/vue";
import { ref } from "vue";
</script>

<template>
  <header class="font-inter px-6 py-10 md:p-12">
    <div class="text-center">
      <b class="text-3xl">Contact</b>
      <p class="text-[13px]">
        Have a project you want me to create? Or <br />
        want to work with me? Feel Free to send me a Message!!
      </p>
    </div>
  </header>

  <main class="font-inter p-2" id="ContactIDScroll">
    <div
      class="flex md:flex-row-reverse justify-between p-5 items-center flex-col"
    >
      <!--For the Form-->
      <form class="flex flex-col gap-3" @click.prevent>
        <label class="font-bold">Full name: </label>
        <input
          class="border-[1px] rounded-sm p-1.5 w-90 md:w-full"
          type="text"
          placeholder="Enter Full Name"
        />
        <label>Email: </label>
        <input
          class="border-[1px] rounded-sm p-1.5 w-90 md:w-full"
          type="email"
          placeholder="ex.shfsfidsf@gmail.com"
        />
        <label>Message: </label>
        <textarea
          class="field-sizing-content p-1.5 md:w-[421px] h-[139px] border-[1px] rounded-sm"
          placeholder="Send me a Message!!"
        ></textarea>
        <button
          class="bg-darkblue text-white p-1 w-[147px] rounded-sm cursor-pointer hover:bg-hoverdark duration-200 ease-in"
        >
          Send Message
        </button>
      </form>
      <!--For the information-->
      <div class="flex flex-col gap-2">
        <b class="text-[20px]">Let's Connect</b>
        <p class="text-[13px]">
          I’m Open to discussing new projects <br />
          create new idea, or opportunities to <br />
          be part of your visions
        </p>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <Mail size="35" />
            <div>
              <p class="font-bold">Email</p>
              <p>rhelpalma6@gmail.com</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Phone size="35" />
            <div>
              <p class="font-bold">Phone</p>
              <p>09215684361</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <MapPin size="35" />
            <div>
              <p class="font-bold">Location</p>
              <p>Calamba, Laguna Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
