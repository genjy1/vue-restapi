<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template class="scroll-smooth">
  <HeaderComponent />
  <main class="mx-auto my-0 w-4/5 py-24">
    <RouterView />
  </main>
</template>
