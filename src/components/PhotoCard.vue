<template>
  <div class="card" :style="{transform: `rotate(${props.rotate}deg)`, height: cardHeight}">
    <div class="img-wrapper" :style="{ width: `${props.width}px`, height: `${props.height}px` }">
      <slot></slot>
    </div>
    <p class="card-text" v-if="props.text" v-html="props.text"></p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<{
  width?: number
  height?: number
  rotate?: number
  text?: string
  cardHeight?: number | string
}>(), {
  rotate: 5
})

</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(250, 250, 250);
  padding: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 420px;
  height: 380px;
}

.card-text {
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 34px;
  line-height: 34px;
  font-family: "Caveat", cursive;
  color: #023a6d;

  @media (max-width: 500px) {
    font-size: 30px;
  }
}

.img-wrapper {
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
