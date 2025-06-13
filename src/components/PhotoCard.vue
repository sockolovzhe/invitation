<template>
  <div class="card" :style="{transform: `rotate(${props.rotate}deg)`}">
    <div class="img-wrapper" :style="{ width: `${props.width}px`, height: `${props.height}px` }">
      <img :src="props.img">
    </div>
    <p class="card-text" v-if="props.text">{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<{
  img: string
  width?: number
  height?: number
  rotate?: number
  text?: string
}>(), {
  rotate: 15
})

</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(250, 250, 250);
  padding: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 420px;
  height: 380px;
}

.card-text {
  font-size: 3vh;
  font-family: "Nunito", sans-serif;
  min-height: 40px;

  @media (max-width: 500px) {
    font-size: 4vh;
  }
}

.img-wrapper {
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
