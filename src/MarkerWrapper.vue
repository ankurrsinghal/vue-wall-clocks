<template>
  <div class="marker" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">

import { inject, defineProps, computed } from 'vue';

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
const paddingSize: any = inject('paddingSize');

const style = computed(() => ({
  top: `${paddingSize.value}px`,
  'transform-origin': `center ${height.value / 2}px`,
  transform: `translate3d(-50%, 0, 0) rotate(${props.rotation || '0deg'})`,
  'font-size': height.value * 0.075 + 'px',
}))
</script>

<style>
.marker {
  position: absolute;
  left: 50%;
  text-align: center;
  display: flex;
}
</style>