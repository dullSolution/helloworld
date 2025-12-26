<script>
import { ref } from 'vue'
import Dinosaurs from './Dinosaurs.vue'
export default {
  components: {
    Dinosaurs
  }
}
</script>

<template>
  <Suspense>
    <template #default>
      <Dinosaurs />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  
</template>

