<template>
  <div v-if="!isLoading" class="loader-wrapper">
    <img src="./assets/lemon-loader.png" class="loader">
  </div>
  <main :style="{ visibility: !isLoading ? 'hidden' : 'visible'}">
    <button @click="playMusic" class="musicBtn">
      <img src="/src/assets/vynil.png" class="musicBtn__img" :class="{ 'rotating' : isPlaying }">
    </button>
    <audio ref="audioRef" loop>
      <source src="./assets/quando.mp3" type="audio/mpeg">
    </audio>
    <router-view></router-view>
    <Place />
    <SurveyForm />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Place from './components/Place.vue'
import SurveyForm from './components/SurveyForm.vue'

const isLoading = ref(false)
const audioRef =ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const playMusic = () => {
  if (!audioRef.value) return

  if (isPlaying.value) {
    audioRef.value?.pause()
    isPlaying.value = false
  } else {
      audioRef.value?.play()
    .then(() => {
      isPlaying.value = true
    })
    .catch((err: any) => {
      console.log('Ошибка воспроизведения:', err)
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = true
  }, 2000)
})
</script>

<style scoped lang="scss">
main {
  width: 85vw;
  height: 100%;
  background-color: white;
  z-index: 10;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.main-title {
  font-family: 'Dancing Script';
  font-size: 10vw;
  color: #023a6d;
}

.loader-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: -2rem;
}

.loader {
  width: 20%;
  margin: auto;
  animation: spin 2s linear infinite;

  @media (max-width: 500px) {
    width: 35%;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.musicBtn {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 100;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: none;
  box-sizing: border-box;

  &__img {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 119px;
    object-fit: contain;
    cursor: pointer;
  }

  .rotating {
    animation: spin 3s linear infinite;
  }
}
</style>
