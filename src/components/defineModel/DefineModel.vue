<script setup lang="ts">
const greeting = defineModel<string>('greeting')



</script>

<template>
  <input
      type="text"
      v-model="greeting"
  >
</template>