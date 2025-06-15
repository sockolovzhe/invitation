<template>
  <section class="timing-wrapper">
    <ul class="timing">
      <li v-for="(description, time) in timing" :key="time">
        <div class="time">{{ time }}</div>
        <div class="description">{{ description }}</div>
      </li>
    </ul>
    <img src="../assets/lemon4.png" class="lemon-left">
    <img src="../assets/lemon4.png" class="lemon-right">
  </section>
</template>

<script setup lang="ts">
const timing = {
  '16:00': 'Сбор гостей + фуршет',
  '16:30': 'Выездная регистрация',
  '17:30': 'Вечеринка',
  '23:30': 'Завершение вечера'
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
  gap: 20px;
}

.time {
  text-align: center;
  font-family: 'Dancing Script';
  font-size: 5vw;
  color: #023a6d;

  @media (max-width: 600px) {
    font-size: 7vw;
  }
}

.description {
  font-family: "Comfortaa", sans-serif;
  font-size: 2vw;
  color: #3b3f43;

  @media (max-width: 600px) {
    font-size: 4vw;
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
    top: -50px;
    right: -300px;
  }
  @media (max-width: 1000px) {
    top: -100px;
    right: -200px;
  }
  @media (max-width: 800px) {
    top: 200px;
    right: -200px;
    transform: rotate(240deg);
  }
  @media (max-width: 800px) {
    top: 150px;
    right: -150px;
    transform: rotate(260deg);
  }
  @media (max-width: 600px) {
    top: 250px;
    right: -150px;
  }
  @media (max-width: 500px) {
    right: -120px;
  }
}
</style>
