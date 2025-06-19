<template>
  <section class="timing-wrapper">
    <ul class="timing">
      <li v-for="(description, time) in timing" :key="time">
        <div class="time">{{ time }}</div>
        <div class="description" v-html="description" />
      </li>
    </ul>
    <img src="../assets/lemon4.png" class="lemon-left">
    <img src="../assets/lemon4.png" class="lemon-right">
  </section>
</template>

<script setup lang="ts">
const timing = {
  '16:00': 'Сбор гостей + фуршет &#129346;',
  '16:45': 'Выездная регистрация &#129333;&#128112;',
  '17:30': 'Вечеринка 	&#128378;&#128131;',
  '23:30': 'Завершение вечера &#128171;'
}
</script>

<style scoped lang="scss">
.timing-wrapper {
  position: relative;
}

.timing {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;

  @media (max-width: 600px) {
    gap: 4vw;
  }
}

.time {
  text-align: center;
  font-family: 'Dancing Script';
  font-size: 5vw;
  color: #023a6d;

  @media (max-width: 1000px) {
    font-size: 8vw;
  }
  @media (max-width: 600px) {
    font-size: 10vw;
  }
}

.description {
  font-family: "Comfortaa", sans-serif;
  font-size: 2vw;
  color: #323538;
  line-height: 4vw;

  @media (max-width: 1000px) {
    font-size: 2.7vw;
    line-height: 5vw;
  }
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  @media (max-width: 600px) {
    font-size: 5vw;
    line-height: 10vw;
  }
}

.lemon-left {
  position: absolute;
  top: 600px;
  left: -350px;
  transform: rotate(-70deg);

  @media (max-width: 1600px) {
    width: 55%;
    top: 200px;
    left: -250px;
  }
  @media (max-width: 1400px) {
    top: 50px;
  }
  @media (max-width: 1000px) {
    top: 250px;
    left: -240px;
  }
  @media (max-width: 800px) {
    top: -150px;
    left: -150px;
  }
  @media (max-width: 600px) {
    width: 70%;
    top: -260px;
    left: -150px;
    transform: rotate(-60deg);
  }
  @media (max-width: 500px) {
    width: 70%;
    top: -200px;
    left: -120px;
    transform: rotate(-60deg);
  }
}

.lemon-right {
  width: 60%;
  position: absolute;
  right: -600px;
  top: 900px;
  transform: rotate(260deg);

  @media (max-width: 1600px) {
    top: 500px;
    right: -400px;
  }
  @media (max-width: 1400px) {
    top: 400px;
    right: -400px;
  }
  @media (max-width: 1300px) {
    top: 300px;
    right: -300px;
  }
  @media (max-width: 1000px) {
    top: -40px;
    right: -250px;
  }
  @media (max-width: 800px) {
    top: 200px;
    right: -200px;
    transform: rotate(240deg);
  }
  @media (max-width: 700px) {
    top: 150px;
    right: -180px;
    transform: rotate(260deg);
  }
  @media (max-width: 600px) {
    top: 550px;
    right: -150px;
  }
  @media (max-width: 500px) {
    top: 470px;
    right: -150px;
  }
  @media (max-width: 450px) {
    top: 410px;
    right: -130px;
  }
  @media (max-width: 400px) {
    top: 370px;
    right: -120px;
  }
}
</style>
