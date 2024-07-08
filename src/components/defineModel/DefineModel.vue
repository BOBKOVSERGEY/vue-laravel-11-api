<script setup lang="ts">
 const props = defineProps<{
   modelValue: string
 }>();

 const emit = defineEmits<{
   (e: 'update:modelValue', message: string | null): void
 }>();

 const onInput = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
 }

</script>

<template>
  <input
      type="text"
      :value="modelValue"
      @input="onInput">
</template>