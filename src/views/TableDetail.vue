<script setup lang="ts">
const url = window.location.href
const id = url.split('/').slice(-1)[0]
import { ref, onMounted } from 'vue'
const table = ref<any>()
import { tableRepository } from '@/repositories/tableRepository'

onMounted(async () => {
  try {
    const response = id && (await tableRepository.get_single(id))
    table.value = response.data.table
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
  <P class="text-2xl">Table Detail</P>
  <div>
    <p>{{ table?.name }}</p>
    <p>{{ table?.organization_id }}</p>
    <p>{{ table?.created_at }}</p>
    <p>{{ table?.modified_at }}</p>
  </div>
</template>
