<template>
  <section class="title-wrapper">
  <h1 class="main-title">
    <span>Ciao,</span>
    <div>{{ guestName }}!</div>
  </h1>
    <PhotoCard class="photo-card" text="Мы женимся!!!">
      <img src="../assets/we1.jpg" class="slot-img">
    </PhotoCard>
    <p class="subtitle">Приглашаем на нашу свадьбу!</p>
    <div class="date">07.09.25</div>

    <img src="../assets/lemon1.png" class="img-1">
    <img src="../assets/lemon1.png" class="img-1-clone">
    <img src="../assets/lemon2.png" class="img-2">
    <img src="../assets/lemon3.png" class="img-3">
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import PhotoCard from "@/components/PhotoCard.vue"

const route = useRoute()
const currentPath = computed(() => route.params.userId)

const guestName = computed(() => {
  switch(currentPath.value) {
    case ('roman&anna'):
      return 'Roman & Anna'
    case ('dima&sasha'):
      return 'Dima & Sasha'
    case ('lesha&lisa'):
      return 'Lesha & Lisa'
    default: 
      return 'дорогие гости'
  }
})
</script>

<style scoped lang="scss">
.title-wrapper {
  position: relative;
  height: 100vh;
}
.main-title {
  padding-top: 15vh;
  font-family: 'Dancing Script';
  font-size: 12vw;
  color: #023a6d;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 19vh;
  }
}

.subtitle {
  margin-top: 30px;
  text-align: center;
  width: 100%;
  font-family: "Comfortaa", sans-serif;
  font-size: 46px;
  color: #4a6685;

  @media (max-width: 1500px) {
    bottom: 200px;
    font-size: 36px;
  }
  @media (max-width: 900px) {
    margin-top: 30px;
    font-size: 26px;
  }
}

.date {
  text-align: center;
  font-family: 'Dancing Script';
  font-size: 70px;
  color: #023a6d;

  @media (max-width: 900px) {
    font-size: 50px;
  }

  @media (max-width: 500px) {
    font-size: 40px;
  }
}

.photo-card {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;

  @media (max-width: 1600px) {
    width: 380px;
    height: 340px;
  }
  @media (max-width: 1400px) {
    width: 350px;
    height: 310px;
  }
  @media (max-width: 1200px) {
    width: 300px;
    height: 280px;
  }
  @media (max-width: 1000px) {
    width: 280px;
    height: 250px;
  }
  @media (max-width: 900px) {
    transform: rotate(4deg) !important;
    position: relative;
    width: 390px;
    height: 330px;
    margin: 20px auto;
  }
  @media (max-width: 700px) {
    width: 400px;
    height: 350px;
    margin: 30px auto;
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 340px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 450px) {
    height: 270px;
  }
}

.img-1 {
  width: 45%;
  position: absolute;
  top: -90px;
  left: -160px;

  @media (max-width: 1400px) {
    width: 50%;
  }
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 1000px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 80%;
    top: -50px;
  }
  @media (max-width: 650px) {
    width: 90%;
    top: -50px;
    left: -130px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
}

.img-1-clone {
  display: none;
  position: absolute;

  @media (max-width: 900px) {
    display: block;
    transform: rotate(270deg);
    width: 65%;
    top: -110px;
    right: -150px;
  }
  @media (max-width: 768px) {
    width: 80%;
    top: -80px;
  }
  @media (max-width: 550px) {
    width: 90%;
    top: -80px;
  }
  @media (max-width: 450px) {
    width: 90%;
    top: -50px;
    right: -120px;
  }
}

.img-2 {
  position: absolute;
  right: -170px;
  width: 30vw;

  @media (max-width: 900px) {
    right: -120px;
    bottom: -300px;
  }
  @media (max-width: 500px) {
    bottom: -150px;
    right: -50px;
  }
}

.img-3 {
  position: absolute;
  left: -250px;
  width: 40vw;
  bottom: -1000px;

  @media (max-width: 1600px) {
    bottom: -700px;
  }

  @media (max-width: 1400px) {
    bottom: -500px;
  }

  @media (max-width: 900px) {
    bottom: -200px;
    left: -200px;
  }
  @media (max-width: 500px) {
    bottom: -100px;
    left: -50px;
  }
}
</style>
