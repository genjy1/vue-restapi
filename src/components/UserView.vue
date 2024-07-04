<script setup>
import axios from 'axios'
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const userPosts = ref()
const user = ref()
const route = useRoute()
const id = computed(() => route.params.id)

watchEffect(async () => {
  axios
    .get(`https://gorest.co.in/public/v1/users/${id.value}/posts`)
    .then((response) => (userPosts.value = response.data.data))
})
watchEffect(async () => {
  axios
    .get(`https://gorest.co.in/public/v1/users/${id.value}`)
    .then((response) => (user.value = response.data.data))
})
</script>
<template>
  <div class="wrapper flex flex-col gap-y-4">
    <h1 class="text-3xl">{{ user.name }}</h1>
    <h2 class="text-xl">Ваши посты</h2>
    <div class="posts__wrapper grid grid-cols-3">
      <RouterLink
        :to="{ name: 'Post', params: { id: post.id } }"
        class="post-card"
        v-for="post in userPosts"
        :key="post.id"
      >
        <h3>{{ post.title }}</h3>
      </RouterLink>
    </div>
  </div>
</template>
