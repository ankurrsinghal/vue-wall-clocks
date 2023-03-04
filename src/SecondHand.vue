<template>
  <div class="second-hand" :style="style" />
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


const style = computed(() => ({
  transform: `rotate(${props.rotation}) translate3d(-50%, 0, 0)`,
  height: `${contentSize.value * 0.5}px`,
  top: `${paddingSize.value}px`,
}));

</script>

<style>
.second-hand {
  position: absolute;
  width: 1px;
  background: black;
  border-radius: 100px;
  left: 50%;
  transform-origin: 0px bottom;
}
</style>