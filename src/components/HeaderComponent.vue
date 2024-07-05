<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="border-b mb-2 fixed w-full backdrop-blur">
    <div class="header__wrapper mx-auto my-0 w-2/5 py-4">
      <nav>
        <ul class="flex justify-between">
          <li><RouterLink to="/" class="hover:underline">Home</RouterLink></li>
          <li><RouterLink to="/users" class="hover:underline">Users</RouterLink></li>
          <li><RouterLink to="/posts" class="hover:underline">Posts</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
