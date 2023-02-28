<template>
  <span>{{ text }}</span>
</template>

<script setup lang="ts">

const props = defineProps({
  index: {
    type: Number
  }
});

const getRomanNumeral = (index: number) => {
  const numerals = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];
  return numerals[index - 1];
};

const text = getRomanNumeral(props.index!);

</script>