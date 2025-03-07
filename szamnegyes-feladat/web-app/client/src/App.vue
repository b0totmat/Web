<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="container">
    <header>
        <Navbar />
    </header>
    <main class="mt-3">
      <RouterView />
    </main>
  </div>
</template>