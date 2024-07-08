<script setup lang="ts">
const slots = defineSlots<{
  default?: (props: {}) => any
  title?: (props: { msg?: string }) => any
  body: (props: { short: boolean }) => any
}>()
</script>

<template>
  <dialog id="my_modal_1" class="modal" open>
    <div class="modal-box">
      <h3 class="text-lg font-bold">
        <slot name="title"/>

      </h3>
      <div v-if="!slots.title">Some new</div>
      <slot/>
      <p class="py-4">
        <slot
            name="body"
            :short="true"
        />
      </p>

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>