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
import { provide, ref, toRefs, computed } from "vue";
import MarkerWrapper from "./MarkerWrapper.vue";
import Motor from "./Motor.vue";
import { useInterval, useRaf } from "./useInterval";

const props = defineProps({
  size: {
    type: Number,
    default: 300,
  },
  smooth: {
    type: Boolean,
    default: false
  }
});

const { size, smooth } = toRefs(props);
const borderSize = computed(() => size.value*0.02);
const paddingSize = computed(() => size.value*0.05);
const finalSize = computed(() => size.value - 2 * (borderSize.value + paddingSize.value));

const currentTime = ref(new Date());

const useAnimation = computed(() => smooth.value ? useRaf : useInterval);

useAnimation.value(() => {
  currentTime.value = new Date();
});

provide("size", size);
provide("borderSize", borderSize);
provide("paddingSize", paddingSize);
provide("contentSize", finalSize);
provide("currentTime", currentTime);

const style = computed(() => ({
  border: `${borderSize.value}px solid black`,
  width: `${size.value}px`,
  height: `${size.value}px`,
}))

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