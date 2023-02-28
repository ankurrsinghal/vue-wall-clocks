<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-screen h-screen items-center justify-center">
      <Clock v-slot="props">
        <LineMarker />
      </Clock>
      <Clock v-slot="props">
        <RomanMarker :index="props.index" />
      </Clock>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-screen h-screen items-center justify-center">
      <Clock smooth v-slot="props">
        <CircleMarker />
      </Clock>
      <Clock v-slot="props">
        <NumberMarker :index="props.index" />
      </Clock>
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
