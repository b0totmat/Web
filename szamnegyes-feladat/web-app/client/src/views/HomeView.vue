<script setup>
import { onMounted } from 'vue'
import { useFourStore } from '@/stores/four'

const fourStore = useFourStore()

onMounted(async () => {
  await fourStore.getFours()
})
</script>

<template>
    <h1>Számnégyesek</h1>
    <ul class="list-group mt-3">
      <li class="list-group-item" v-for="four in fourStore.fours" :key="four.id">
        <span class="me-2" v-for="number in four.four">{{ number }};</span>
      </li>
    </ul>
</template>
