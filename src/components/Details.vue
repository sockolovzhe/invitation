<template>
  <section class="details">
    <h3 class="details__title">Details</h3>
    <div>Если в день свадьбы появятся какие-либо вопросы, готовите сюрприз или заблудились, вам с радостью поможет наш координатор:
      <br>
      <div class="org-info">Екатерина</div>
      <a class="org-info" href="tel:+79502054036">+7 950 205-40-36</a>
    </div>
    &#127819;
    <p>Также мы создали телеграмм-чат нашего праздника, где можно будет узнать дополнительную информацию, поделиться фотографиями и видео в день и после свадьбы:</p>
    <a class="details__btn" href="https://t.me/+2m7yYiwmlRRkZWMy">Вступить в чат</a>
  </section>
</template>

<style scoped lang="scss">
.details {
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
    width: 99%;
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

    @media (max-width: 1000px) {
      font-size: 5vw;
    }
    @media (max-width: 800px) {
      font-size: 6vw;
    }
    @media (max-width: 600px) {
      font-size: 8vw;
    }
  }
}
</style>