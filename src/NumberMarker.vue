<template>
  <span>{{ text }}</span>
</template>

<script setup lang="ts">

const props = defineProps({
  index: {
    type: Number
  }
});
const text = (props.index! - 1 === 0 ? 12 : props.index! - 1)!.toString();

</script>