<script setup lang="ts">
const greeting = defineModel<string>('greeting');
const farewell = defineModel<string>('farewell');



</script>

<template>
  <input
      type="text"
      v-model="greeting"
  >
  <br>
  <input
      type="text"
      v-model="farewell"
  >
</template>