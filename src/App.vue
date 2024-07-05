<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template class="scroll-smooth">
  <HeaderComponent />
  <main class="mx-auto my-0 w-2/3 py-24 border h-screen">
    <RouterView />
  </main>
</template>
