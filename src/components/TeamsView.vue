<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'

const teams = ref()
let currentPage = ref(1)
const user_id = ref()

// const links = ref()
// const link = 'https://liquipedia.net/dota2'

watchEffect(async () => {
  try {
    await axios
      .get(`https://gorest.co.in/public/v1/posts?page=${currentPage.value}`)
      .then((response) => (teams.value = response.data.data))
  } catch (err) {
    console.warn(err)
  }
})

watchEffect(async () => {
  try {
    await axios
      .get(`https://gorest.co.in/public/v2/users/${user_id.value}`)
      .then((response) => (user.value = response.data.data))
  } catch (err) {
    console.warn(err)
  }
})

onMounted(async () => {
  try {
    await axios
      .get('https://gorest.co.in/public/v1/posts}')
      .then((response) => (teams.value = response.data.data))
  } catch (err) {
    console.warn(err)
  }
})
</script>

<template>
  <div class="teams__wrapper">
    <RouterLink
      :to="{ name: 'Post', params: { id: team.id } }"
      v-for="team in teams"
      :key="team.team_id"
      :id="team.id"
      :team_id="team.team_id"
      class="flex flex-col w-full even:border odd:bg-slate-200 p-4 h-80 first:rounded-t-xl"
    >
      <h2 class="capitalize">
        {{ team.title }}
      </h2>
      <p>{{ team.body }}</p>
    </RouterLink>
    <RouterView />
  </div>

  <div class="fixed w-full backdrop-blur left-0 bottom-0">
    <div class="w-4/5 mx-auto my-0 flex gap-x-5 py-4">
      <button class="relative text-slate-400 rounded-xl px-4" @click="currentPage--">Prev</button>
      <span>{{ currentPage }}</span>
      <button class="relative text-slate-400 rounded-xl px-4" @click="currentPage++">Next</button>
    </div>
  </div>
</template>
