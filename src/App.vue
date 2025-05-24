<template>
  <main>
    <router-view></router-view>
    Просим выбрать алкоголь
    <ul>
      <li>Вино белое</li>
      <li>Вино красное</li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// @ts-ignore
import Title from './components/Title.vue'


</script>

<style scoped>
.main-title {
  font-family: 'Dancing Script';
  font-size: 10vw;
  color: #023a6d;
}
/* @media (min-width: 1024px) {

} */
</style>
