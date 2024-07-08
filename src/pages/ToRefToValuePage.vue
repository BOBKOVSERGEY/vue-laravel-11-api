<script setup lang="ts">

import {ref} from "vue";
import {useUserData} from "@/composables/useUserData";

const name = ref<string>('');

const {data} = useUserData(name);
</script>

<template>
  <div class="flex justify-center gap-4">
    <button class="btn" @click="name = 'John'">John</button>
    <button class="btn" @click="name = 'Terry'">Terry</button>
    <button class="btn" @click="name = 'Oleta'">Oleta</button>
  </div>
  <div>
    name: {{ data?.users[0].firstName }}
  </div>
  <div>
    email: {{ data?.users[0].email }}
  </div>
</template>