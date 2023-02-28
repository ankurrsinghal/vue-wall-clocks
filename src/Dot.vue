<template>
  <div class="dot" :style="style" />
</template>

<script setup lang="ts">
import { inject } from 'vue';


const size: any = inject('size');
const dotSize = size*0.05;

const style = {
  width: `${dotSize}px`,
  height: `${dotSize}px`
}
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