<template>
  <div class="motor">
    <SecondHand :rotation="secondHandRotation" />
    <MinuteHand :rotation="minuteHandRotation" />
    <HourHand :rotation="hourHandRotation" />
    <Dot />
  </div>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue';
import Dot from './Dot.vue';
import HourHand from './HourHand.vue';
import MinuteHand from './MinuteHand.vue';
import SecondHand from './SecondHand.vue';

const currentTime: any = inject<Date>('currentTime');
const secondHandRotation = computed(() => (((+currentTime.value) * 6)/1000) + 'deg');
const minuteHandRotation = computed(() => (currentTime.value.getMinutes() + currentTime.value.getSeconds() / 60) * 6 + 'deg');
const hourHandRotation = computed(() => {
  const rotation = ((currentTime.value.getHours() % 12) +
    currentTime.value.getMinutes() / 60 +
    currentTime.value.getSeconds() / 3600) *
    30 +
    'deg';
  return rotation;
});

</script>