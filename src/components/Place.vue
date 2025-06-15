<template>
  <section class="place">
    <PhotoCard text="Место проведения:<br> Экопарк Sun&Voda" class="place-card place-img">
      <img src="../assets/place.jpeg" class="slot-img">
    </PhotoCard>
    <PhotoCard text="Точка на карте" class="place-card place-map">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2fcab8692d58af181689fca0fa87444c9b7c752b9a248fce69df6ec6a537f969&amp;source=constructor" :width="mapWidth" :height="mapHeight" frameborder="0"></iframe>
    </PhotoCard>
  </section>
</template>

<script setup lang="ts">
import PhotoCard from "@/components/PhotoCard.vue"
import { ref } from "vue"

const mapWidth = ref(392)
const mapHeight = ref(270)

const mediaQuery1000 = window.matchMedia('(max-width: 1000px)')
const mediaQuery800 = window.matchMedia('(max-width: 800px)')
const mediaQuery600 = window.matchMedia('(max-width: 600px)')

if (mediaQuery1000.matches) {
  mapWidth.value = 300
}
if (mediaQuery800.matches) {
  mapWidth.value = 400
  mapHeight.value = 260
}
if (mediaQuery600.matches) {
  mapWidth.value = 280
  mapHeight.value = 210
}
</script>

<style scoped lang="scss">
.place {
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: start;
    height: 700px;
  }
}

.place-card {
  @media (max-width: 1000px) {
    height: 340px;
  }
  @media (max-width: 800px) {
    height: 370px;
  }
  // @media (max-width: 700px) {
  //   height: 340px;
  // }
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
}

.place-img {
  transform: rotate(-5deg) !important;
  z-index: 10;
}

.place-map {
  @media (max-width: 800px) {
    transform: rotate(4deg) !important;
    position: absolute;
    right: 0;
    top: 320px;
  }
  @media (max-width: 600px) {
    top: 280px;
  }
}
</style>
