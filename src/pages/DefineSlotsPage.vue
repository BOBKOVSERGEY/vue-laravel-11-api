<script setup lang="ts">

import DaisyUIModal from "@/components/DaisyUIModal.vue";
</script>

<template>
  <DaisyUIModal>
    <template #title>
      Modal title
    </template>
    <template #default>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, at corporis cum dolore dolorem doloribus, illo maxime minus neque officia placeat possimus? Fuga, necessitatibus voluptates? Itaque magnam perspiciatis tempore. Magni.
    </template>
    <template #body="{ short }">
      <p>Lorem ipsum dolor sit amet.</p>
      <p v-if="!short">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, repellat.</p>
    </template>
  </DaisyUIModal>
</template>