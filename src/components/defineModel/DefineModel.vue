<script setup lang="ts">
 const props = defineProps<{
   greeting: string
 }>();

 const emit = defineEmits<{
   (e: 'update:greeting', message: string | null): void
 }>();

 const onInput = (e: Event) => {
    emit('update:greeting', (e.target as HTMLInputElement).value)
 }

</script>

<template>
  <input
      type="text"
      :value="greeting"
      @input="onInput">
</template>