<script setup lang="ts">

import {ref} from "vue";
import DefineModel from "@/components/defineModel/DefineModel.vue";

const greeting = ref<string>('');
const farewell = ref<string>('');
</script>

<template>
  <DefineModel
      v-model:greeting="greeting"
      v-model:farewell="farewell"
  />
  <br>
  {{ greeting }}
  <br>
  {{ farewell }}
</template>