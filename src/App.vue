<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="mx-auto my-0 w-4/5 py-24">
    <RouterView />
  </main>
</template>
