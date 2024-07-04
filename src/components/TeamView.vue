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
  <RouterLink :to="{ name: 'Posts' }">Ко всем постам...</RouterLink>
  <div class="flex flex-col mt-4 gap-y-8 w-4/5 rounded-xl border w-full h-dvh">
    <h1 class="text-left border-b w-full px-4 py-4 rounded-t-xl text-blue-400">
      {{ post.title }}
    </h1>
    <p class="px-4">{{ post.body }}</p>
  </div>
</template>
