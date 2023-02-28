<template>
  <div
    class="clock mx-auto"
    :style="style"
  >
    <div class="markers-collection">
      <MarkerWrapper
        v-for="index in 12"
        :key="index"
        :rotation="(index - 1) * 30 + 'deg'"
      >
        <slot :index="index" />
      </MarkerWrapper>
    </div>
    <Motor />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, useSlots } from "vue";
import MarkerWrapper from "./MarkerWrapper.vue";
import Motor from "./Motor.vue";
import { useInterval, useRaf } from "./useInterval";

const props = defineProps({
  smooth: {
    type: Boolean,
    default: false
  }
});

const size = 300;
const borderSize = size*0.02;
const paddingSize = size*0.05;
const finalSize = size - 2 * (borderSize + paddingSize);

const currentTime = ref(new Date());

const useAnimation = props.smooth ? useRaf : useInterval;

useAnimation(() => {
  currentTime.value = new Date();
});

provide("size", size);
provide("borderSize", borderSize);
provide("paddingSize", paddingSize);
provide("contentSize", finalSize);
provide("currentTime", currentTime);

const style = {
  border: `${borderSize}px solid black`,
  width: `${size}px`,
  height: `${size}px`,
}

</script>

<style>
.clock {
  position: relative;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 50%;
  box-sizing: border-box;
}
</style>