<template>
  <section class="wishes">
    <h3 class="wishes__title">Wishes</h3>
    <p>Мы очень ценим Вашу заботу и внимание и будем рады подаркам в конвертах для осуществления нашей мечты - поездки в Японию.</p>
    &#127819;
    <div class="flowers">
      <p>Захватите с собой отличное настроение и слезы умиления, а порадовать нас букетом Вы можете, сделав вклад в цветочную подписку, перейдя по QR-коду или</p>
      <a href="https://floryberry.ru/sokolovi" target="_blank">по этой ссылке</a>.
      <p>Так мы будем наслаждаться цветами не в день свадьбы, а после, с теплом и любовью вспоминая Вас</p>
      &#128155;
    </div>

    <img src="../assets/lemon1.png" class="lemon">
  </section>
  <div class="photos">
    <PhotoCard text="Цветочная подписка" class="wishes-card qr-code-img" :card-height="'100%'" >
      <img src="../assets/qr.png" class="slot-img">
    </PhotoCard>
    <PhotoCard text="Мы" class="wishes-card we-img" :card-height="'100%'">
      <img src="../assets/we2.jpg" class="slot-img">
    </PhotoCard>
    <PhotoCard text="Наша мечта" class="wishes-card japan-img" :card-height="'100%'">
      <img src="../assets/japan.jpeg" class="slot-img">
    </PhotoCard>
  </div>
</template>

<script setup lang="ts">
import PhotoCard from "@/components/PhotoCard.vue"
</script>

<style scoped lang="scss">
.wishes {
  position: relative;
  width: 67%;
  margin: 0 auto;
  text-align: center;
  margin-top: 25vw;
  font-family: "Comfortaa", sans-serif;
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  color: #323538;
  line-height: 2.4vw;

  @media (max-width: 1000px) {
    font-size: 2.7vw;
    width: 88%;
    line-height: 3.3vw;
  }
  @media (max-width: 800px) {
    margin-top: 15vw;
    font-size: 3vw;
    line-height: 3.6vw;
  }
  @media (max-width: 600px) {
    gap: 3vw;
    width: 98%;
    font-size: 5vw;
    line-height: 6.5vw;
  }

  a {
    color: #023a6d;
  }

  &__title {
    font-family: 'Dancing Script';
    font-size: 8vw;
    color: #023a6d;
    margin-bottom: 5vw;

    @media (max-width: 1000px) {
      font-size: 9vw;
    }
    @media (max-width: 600px) {
      font-size: 12vw;
    }
  }
}

.flowers p {
  &:last-of-type {
    margin-top: 12px;
  }
}

.lemon {
  position: absolute;
  left: -500px;
  top: -550px;

  @media (max-width: 1600px) {
    width: 100%;
    top: -500px;
  }
  @media (max-width: 1600px) {
    left: -400px;
  }
  @media (max-width: 1400px) {
    width: 100%;
    top: -400px;
  }
  @media (max-width: 1200px) {
    top: -350px;
    left: -300px;
  }
  @media (max-width: 1000px) {
    width: 80%;
    top: -300px;
    left: -250px;
  }
  @media (max-width: 900px) {
    top: -270px;
    left: -230px;
  }
  @media (max-width: 800px) {
    width: 150%;
    top: -100px;
    left: -670px;
    transform: rotate(-30deg);
  }
  @media (max-width: 700px) {
    left: -460px;
  }
  @media (max-width: 600px) {
    width: 70%;
    left: -200px;
    top: -150px;
    transform: rotate(0deg)
  }
  @media (max-width: 500px) {
    left: -150px;
    top: -100px;
  }
}

.photos {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3vw;

  @media (max-width: 600px) {
    width: 85%;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
  }
}

.wishes-card {
  @media (max-width: 600px) {
    width: auto;
  }
}

.qr-code-img {
  transform: rotate(-10deg) !important;
}

.we-img {
  transform: rotate(-1deg) !important;
}

.japan-img {
  transform: rotate(8deg) !important;
}
</style>
