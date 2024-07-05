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
  <ul class="grid grid-rows gap-4 px-4">
    <li v-for="user in users" :key="user.id">
      <RouterLink :to="{ name: 'User', params: { id: user.id } }" class="flex align-items gap-x-4">
        <img src="../assets/logo.svg" alt="Avatar Icon" class="w-6" /> {{ user.name }}
      </RouterLink>
    </li>
  </ul>
</template>
