<template>
  <section class="details">
    <h3 class="details__title">Details</h3>
    <div>Возникли вопросы? Готовите сюрприз? Заблудились?<br>В день свадьбы на связи будет наш координатор:
      <br>
      <div class="org-info">Екатерина</div>
      <a class="org-info tel" href="tel:+79502054036">+7 950 205-40-36</a>
    </div>
    &#127819;
    <p>Вступайте в телеграм-чат, где вы сможете поделиться фотографиями и видео с нашей свадьбы:</p>
    <a class="details__btn" href="https://t.me/+2m7yYiwmlRRkZWMy">Вступить в чат</a>

    <img src="../assets/lemon1.png" class="lemon-left">
    <img src="../assets/lemon1.png" class="lemon-right">
  </section>
</template>

<style scoped lang="scss">
.details {
  position: relative;
  margin: 8vw auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4vw;
  width: 67%;
  line-height: 2.4vw;
  font-family: "Comfortaa", sans-serif;
  font-size: 2vw;

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

  &__title {
    font-family: 'Dancing Script';
    font-size: 8vw;
    color: #023a6d;
    margin-bottom: 4vw;

    @media (max-width: 1000px) {
      font-size: 9vw;
    }
    @media (max-width: 600px) {
      font-size: 12vw;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Comfortaa", sans-serif;
    margin: 30px auto;
    width: 20vw;
    height: 5vw;
    border: none;
    color: #023a6d;
    background-color: #c2d7eb;
    cursor: pointer;
    font-weight: 700;
    font-size: 2vw;
    text-decoration: none;

    @media (max-width: 1000px) {
      width: 27vw;
      height: 6.5vw;
      font-size: 2.7vw;
    }
    @media (max-width: 800px) {
      width: 29vw;
      height: 7.3vw;
      font-size: 3vw;
    }
    @media (max-width: 600px) {
      width: 40vw;
      height: 7vh;
      font-size: 4vw;
    }
  }

  .org-info {
    display: block;
    margin-top: 2vw;
    font-family: "Caveat", cursive;
    font-size: 4vw;
    color: #023a6d;
    text-decoration: none;

    @media (max-width: 1000px) {
      font-size: 5vw;
    }
    @media (max-width: 800px) {
      font-size: 6vw;
    }
    @media (max-width: 600px) {
      font-size: 8vw;
    }

    &.tel {
      display: inline-block;
    }
  }
}

.lemon-left {
  width: 80%;
  position: absolute;
  left: -700px;
  bottom: 0;
  transform: rotate(280deg);

  @media (max-width: 1600px) {
    left: -570px;
  }
  @media (max-width: 1400px) {
    left: -510px;
  }
  @media (max-width: 1300px) {
    left: -470px;
  }
  @media (max-width: 1150px) {
    left: -400px;
  }
  @media (max-width: 1000px) {
    left: -470px;
  }
  @media (max-width: 900px) {
    left: -410px;
  }
  @media (max-width: 800px) {
    left: -350px;
  }
  @media (max-width: 700px) {
    left: -300px;
  }
  @media (max-width: 600px) {
    left: -250px;
  }
  @media (max-width: 500px) {
    left: -190px;
  }
  @media (max-width: 450px) {
    left: -170px;
  }
  @media (max-width: 400px) {
    left: -170px;
  }
}

.lemon-right {
  width: 85%;
  position: absolute;
  right: -750px;
  bottom: 0;
  transform: rotate(-20deg);

  @media (max-width: 1600px) {
    right: -640px;
  }
  @media (max-width: 1400px) {
    right: -580px;
  }
  @media (max-width: 1300px) {
    right: -530px;
  }
  @media (max-width: 1150px) {
    right: -490px;
  }
  @media (max-width: 1000px) {
    width: 80%;
    right: -500px;
  }
  @media (max-width: 900px) {
    right: -460px;
  }
  @media (max-width: 800px) {
    right: -400px;
  }
  @media (max-width: 700px) {
    right: -350px;
  }
  @media (max-width: 600px) {
    right: -280px;
  }
  @media (max-width: 500px) {
    right: -220px;
  }
  @media (max-width: 450px) {
    right: -200px;
  }
  @media (max-width: 400px) {
    right: -170px;
  }
}
</style>