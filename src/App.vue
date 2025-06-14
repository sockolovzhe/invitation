<template>
  <div v-if="!isLoading">
    <img src="./assets/lemon-loader.png" class="loader">
  </div>
  <main :style="{ visibility: !isLoading ? 'hidden' : 'visible'}">
    <button @click="playMusic" class="musicBtn">
      <div v-if="!isPlaying">Включить итальянскую музыку</div>
      <div v-else>Выключить музыку</div>
    </button>
    <audio ref="audioRef" autoplay loop>
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
  }, 1000)
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
.loader {
  width: 10%;
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  animation: spin 2s linear infinite;

  @media (max-width: 500px) {
    width: 30%;
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
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: yellow;
  cursor: pointer;
  border: 2px solid rgb(240, 240, 1);
  font-style: italic;
  box-sizing: border-box;
}
</style>
