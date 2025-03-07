<template>
    <form class="w-75 mx-auto">
        <div class="mb-2">
            <label for="n1" class="form-label">Első szám:</label>
            <input type="number" class="form-control w-25 d-inline-block ms-2" id="n1" v-model="newFour.four[0]">
        </div>
        <div class="mb-2">
            <label for="n2" class="form-label">Második szám:</label>
            <input type="number" class="form-control w-25 d-inline-block ms-2" id="n2" v-model="newFour.four[1]">
        </div>
        <div class="mb-2">
            <label for="n3" class="form-label">Harmadik szám:</label>
            <input type="number" class="form-control w-25 d-inline-block ms-2" id="n3" v-model="newFour.four[2]">
        </div>
        <div class="mb-2">
            <label for="n4" class="form-label">Negyedik szám:</label>
            <input type="number" class="form-control w-25 d-inline-block ms-2" id="n4" v-model="newFour.four[3]">
        </div>
        <button class="btn btn-outline-success" @click="post">Küldés</button>
    </form>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useFourStore } from '@/stores/four'

const router = useRouter()
const fourStore = useFourStore()
const newFour = ref({
    four: [0, 0, 0, 0]
})

async function post(e) {
    e.preventDefault()
    await fourStore.saveNewFour(newFour.value)
    router.push('/')
}
</script>