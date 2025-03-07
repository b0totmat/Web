import { ref } from 'vue'
import { defineStore } from 'pinia'

import FourService from '@/services/FourService'

export const useFourStore = defineStore('four', () => {
  const fours = ref([])

  async function getFours() {
    try {
      fours = (await FourService.index()).data
    } catch(e) {
      console.error(e)
    }
  }

  async function getFourById(id) {
    let four = null

    try {
      four = (await FourService.show(id)).data
    } catch(e) {
      console.error(e)
    }
    return four
  }

  async function saveNewFour(four) {
    try {
      await FourService.insert(four)
    } catch(e) {
      console.error(e)
    }
  }

  return { fours, getFours, getFourById, saveNewFour }
})
