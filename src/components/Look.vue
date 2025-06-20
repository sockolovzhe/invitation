<template>
  <section class="look">
    <h3 class="look__title">Dress code</h3>
    <p class="look__text">Мы долго готовили наш праздник, пожалуйста, поддержите итальянский стиль нашей свадьбы в пастельных оттенках:</p>
    <ul class="colors-list" :style="{ gridTemplateColumns: `repeat(${lookColors.length}, 1fr)` }">
      <li
        v-for="(color, index) in lookColors"
        :key="index"
        class="colors-list__item"
        :style="{
          backgroundColor: color,
        }"
      />
    </ul>
    
    <div class="photos">
      <PhotoCard class="look-card card1">
        <img src="../assets/look3.jpg" class="slot-img">
      </PhotoCard>
      <PhotoCard class="look-card card2">
        <img src="../assets/look2.jpg" class="slot-img">
      </PhotoCard>
      <PhotoCard class="look-card card3">
        <img src="../assets/look1.jpg" class="slot-img">
      </PhotoCard>
    </div>

    <img src="../assets/lemon2.png" class="lemon-left">
    <img src="../assets/lemon1.png" class="lemon-right">
  </section>
</template>

<script setup lang="ts">
import PhotoCard from "@/components/PhotoCard.vue"

const lookColors = ['#ffea8b', '#f2e1c8', '#becfa7', '#9eb383', '#b0c8da']
</script>

<style scoped lang="scss">
.look {
  position: relative;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  text-align: center;
  font-family: "Comfortaa", sans-serif;
  font-size: 2vw;
  color: #323538;

  @media (max-width: 600px) {
    margin-top: 20%;
  }

  &__title {
    font-family: 'Dancing Script';
    font-size: 8vw;
    color: #023a6d;

    @media (max-width: 1000px) {
      font-size: 9vw;
    }
    @media (max-width: 600px) {
      font-size: 12vw;
    }
  }

  &__text {
    width: 67%;
    line-height: 2.4vw;

    @media (max-width: 1000px) {
      font-size: 2.7vw;
      line-height: 3.3vw;
      width: 82%;
    }
    @media (max-width: 800px) {
      font-size: 3vw;
      line-height: 3.6vw;
    }
    @media (max-width: 600px) {
      width: 96%;
      font-size: 5vw;
      line-height: 6.5vw;
    }
  }
}

.colors-list {
  display: grid;
  justify-items: center;
  gap: 12px;
  margin-bottom: 4vw;

  @media (max-width: 600px) {
    gap: 8px;
  }

  &__item {
    width: 7vw;
    height: 7vw;
    border-radius: 100%;

    @media (max-width: 1000px) {
      width: 9vw;
      height: 9vw;
    }
    @media (max-width: 600px) {
      width: 12vw;
      height: 12vw;
    }
  }
}

.photos {
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
}

.look-card {
  height: auto;

  @media (max-width: 800px) {
    width: 65vw;
  }
}

.card1 {
  transform: rotate(-8deg) !important;
  z-index: 2;

  @media (max-width: 800px) {
    transform: rotate(8deg) !important;
  }
}

.card2 {
  transform: rotate(0deg) !important;
  z-index: 2;

  @media (max-width: 800px) {
    transform: rotate(1deg) !important;
    position: relative;
    top: -50px;
    left: 30px;
  }
}

.card3 {
  transform: rotate(5deg) !important;

  @media (max-width: 800px) {
    position: relative;
    top: -70px;
    left: -10px;
    transform: rotate(-8deg) !important;
  }
}

.lemon-left {
  display: none;
  position: absolute;
  left: -70px;
  transform: rotate(180deg);

  @media (max-width: 800px) {
    width: 60vw;
    top: 340px;
    display: block;
  }
}

.lemon-right {
  position: absolute;
  right: -200px;
  bottom: -400px;
  transform: rotate(200deg);

  @media (max-width: 1600px) {
    right: -270px;
  }
  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1300px) {
    width: 75%;
    bottom: -300px;
    right: -220px;
  }
  @media (max-width: 1200px) {
    width: 75%;
    right: -170px;
  }
  @media (max-width: 1000px) {
    width: 70%;
    bottom: -200px;
    right: -120px;
  }
  @media (max-width: 800px) {
    width: 100%;
    bottom: -80px;
    right: -60px;
  }
  @media (max-width: 600px) {
    width: 100%;
    bottom: -30px;
    right: -40px;
  }
}
</style>
