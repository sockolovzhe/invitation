<template>
  <main>
    <h1 class="main-title">
      <span>Ciao,</span>
      <div>{{ guestName }}</div>
    </h1>
    
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentPath = computed(() => route.path.replace('/', ''));

const guestName = computed(() => {
  switch(currentPath.value) {
    case ('roman&anna'):
      return 'Roman & Anna'
    case ('dima&sasha'):
      return 'Dima & Sasha'
    default: 
      return 'дорогие гости'
  }

})

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
