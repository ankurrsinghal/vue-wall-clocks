<template>
  <div class="marker" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">

import { inject, defineProps } from 'vue';

const props = defineProps({
  rotation: {
    type: String,
    default: '0deg',
  },
  value: {
    type: String,
  }
});

const height: any = inject('contentSize');
const paddingSize = inject('paddingSize');

const style = {
  top: `${paddingSize}px`,
  'transform-origin': `center ${height / 2}px`,
  transform: `translate3d(-50%, 0, 0) rotate(${props.rotation || '0deg'})`,
  'font-size': height * 0.075 + 'px',
}
</script>

<style>
.marker {
  position: absolute;
  left: 50%;
  text-align: center;
  display: flex;
}
</style>