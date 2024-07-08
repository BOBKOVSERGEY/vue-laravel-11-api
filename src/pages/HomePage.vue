<script setup lang="ts">

import ChildComponent from "@/components/ChildComponent.vue";
import {ref} from "vue";

const count = ref<number>(1)
</script>

<template>
  <ChildComponent
      :count="count"
  />
  <button @click="count++">Increase Count</button>
</template>