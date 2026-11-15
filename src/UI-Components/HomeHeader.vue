<script setup>
import { ref } from "vue";
import ImagePicture from "../assets/img/Main-Image.png";
import HoverImage from "../assets/img/HoverImage.png";

const mainImage = ref(ImagePicture);

const imageHover = () => {
  mainImage.value = HoverImage;
};

const imageNormal = () => {
  mainImage.value = ImagePicture;
};
</script>

<template>
  <main>
    <div>
      <div data-aos="fade-right" data-aos-duration="700">
        <img
          :src="mainImage"
          @mouseenter="imageHover"
          @mouseleave="imageNormal"
          alt="Image Profile"
          class="w-80 border-2 rounded-xl h-78 cursor-pointer"
        />
      </div>
    </div>
  </main>
</template>
