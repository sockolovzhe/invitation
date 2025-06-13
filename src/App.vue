<template>
  <div v-if="!isLoading">
    <img src="./assets/lemon-loader.png" class="loader">
  </div>
  <main :style="{ visibility: !isLoading ? 'hidden' : 'visible'}">
    <!-- <button v-if="!isPlaying" @click="playMusic">Включить музыку</button> -->
    <audio ref="audioRef" autoplay loop>
      <source src="./assets/quando.mp3" type="audio/mpeg">
    </audio>
    <router-view></router-view>
    <SurveyForm />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
// @ts-ignore
import SurveyForm from './components/SurveyForm.vue'

const isLoading = ref(false)
const audioRef =ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const playMusic = () => {
  console.log('audioRef', audioRef.value)

  if (audioRef.value) {
    audioRef.value?.play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch((err: any) => {
        console.log('Ошибка воспроизведения:', err);
      })
  }
};

onMounted(async () => {
  await nextTick()
  playMusic()
  setTimeout(() => {
    isLoading.value = true
  }, 1000)
})
</script>

<style scoped>
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
  width: 20%;
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
