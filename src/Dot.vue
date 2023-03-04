<template>
  <div class="dot" :style="style" />
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';


const size: any = inject('size');
const dotSize = computed(() => size.value*0.05);

const style = computed(() => ({
  width: `${dotSize.value}px`,
  height: `${dotSize.value}px`
}));
</script>

<style>
.dot {
  position: absolute;
  background: black;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
</style>