<script setup>
import axios from 'axios'
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const post = ref()
const route = useRoute()
const id = computed(() => route.params.id)

watchEffect(async () => {
  axios
    .get(`https://gorest.co.in/public/v1/posts/${id.value}`)
    .then((response) => (post.value = response.data.data))
})
</script>
<template>
  <RouterLink :to="{ name: 'Posts' }">К постам...</RouterLink>
  <div class="flex flex-col justify-between gap-y-8 w-4/5 pt-4">
    <h1 class="text-left">{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
