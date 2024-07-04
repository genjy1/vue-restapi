<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
// import { watchEffect } from 'vue'

// watchEffect(() => {
//   const route = useRoute()

//   document.title = route.name
// })
</script>

<template>
  <HeaderComponent />
  <main class="mx-auto my-0 w-4/5 py-24">
    <RouterView />
  </main>
</template>
