<script setup lang="ts">

import {ref} from "vue";
import DefineModel from "@/components/defineModel/DefineModel.vue";

const message = ref<string>('');
</script>

<template>
  <DefineModel v-model:greeting="message" />
  {{ message }}
</template>