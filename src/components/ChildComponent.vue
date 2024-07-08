<script setup lang="ts">
import {watchEffect} from "vue";

interface Props {
  msg?: string,
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'Hello'
})

watchEffect(() => {

})
</script>

<template>
  <div>
    {{msg}} {{count}}
  </div>
</template>