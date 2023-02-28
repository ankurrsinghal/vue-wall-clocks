<template>
  <div class="hour-hand" :style="style" />
</template>

<script setup lang="ts">

import { inject, defineProps, computed } from 'vue';

const props = defineProps({
  rotation: {
    type: String,
    default: '0deg',
  },
});

const contentSize: any = inject('contentSize');
const paddingSize: any = inject('paddingSize');

const sizeLessThanSecondHand = contentSize*0.2;

const style = computed(() => ({
  transform: `rotate(${props.rotation}) translate3d(-50%, 0, 0)`,
  height: `${contentSize * 0.5 - sizeLessThanSecondHand}px`,
  top: `${paddingSize + sizeLessThanSecondHand}px`,
}));

</script>

<style>
.hour-hand {
  position: absolute;
  width: 3px;
  background: black;
  border-radius: 100px;
  left: 50%;
  transform-origin: 0px bottom;
}
</style>
