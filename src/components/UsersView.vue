<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const users = ref()

onMounted(async () => {
  try {
    await axios
      .get('https://gorest.co.in/public/v2/users')
      .then((response) => (users.value = response.data))
  } catch (err) {
    console.warn(err)
  }
})
</script>
<template>
  <div v-for="user in users" :key="user.id">
    {{ user.name }}
  </div>
</template>
