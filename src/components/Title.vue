<template>
  <h1 class="main-title">
    <span>Ciao,</span>
    <div>{{ guestName }}</div>
  </h1>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const currentPath = computed(() => route.params.userId)

const guestName = computed(() => {
  switch(currentPath.value) {
    case ('roman&anna'):
      return 'Roman & Anna'
    case ('dima&sasha'):
      return 'Dima & Sasha'
    case ('lesha&lisa'):
      return 'Lesha & Lisa'
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
</style>
