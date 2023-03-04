<template>
  <div class="w-screen">
    <div class="">
      <div class="border-b border-light">
        <div class="container mx-auto h-16 flex items-center">
          <div>
            <ul class="flex space-x-10">
              <li>
                <a class="hover:underline" href="#">Github</a>
              </li>
              <li>
                <a class="hover:underline" href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex justify-between w-full py-40 items-center">
          <h1 class="text-8xl font-bold leading-tight">
            <span class="block text-secondary">Vue</span>
            <span class="block text-primary">Beautiful</span>
            <span class="block text-secondary">Wall Clocks</span>
          </h1>
          <div>
            <Clock v-slot="props">
              <LineMarker />
            </Clock>
          </div>
        </div>
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <Clock v-slot="props">
            <RomanMarker :index="props.index" />
          </Clock>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <Clock smooth v-slot="props">
            <CircleMarker />
          </Clock>
          <Clock v-slot="props">
            <NumberMarker :index="props.index" />
          </Clock>
        </div> -->
      </div>
      </div>
  </div>
</template>

<script lang="ts">
import Clock from './Clock.vue';
import LineMarker from './LineMarker.vue';
import RomanMarker from './RomanMarker.vue';
import CircleMarker from './CircleMarker.vue';
import NumberMarker from './NumberMarker.vue';

export default {
  name: 'App',
  components: {
    Clock,
    LineMarker,
    RomanMarker,
    CircleMarker,
    NumberMarker
  },
};
</script>

<style>

</style>
