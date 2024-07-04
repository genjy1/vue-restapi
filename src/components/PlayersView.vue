<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const players = ref()
defineProps({
  id: Number
})

onMounted(async () => {
  try {
    await axios
      .get(`https://api.opendota.com/api/teams/39/players`)
      .then((response) => (players.value = response.data))
  } catch (err) {
    console.warn(err)
  }
})
</script>
<template>
  <div v-for="player in players" :key="player.player_id">
    {{ player.name }}
  </div>
</template>
