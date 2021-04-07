<template>
  <h1 v-if="mounted">App</h1>

  <Async />
</template>

<script>
import { defineAsyncComponent, onMounted, ref } from 'vue'

export default {
  components: {
    Async: defineAsyncComponent(() => import('./Async.vue')),
  },
  setup() {
    const mounted = ref(false)

    onMounted(() => {
      mounted.value = true
    })

    return {
      mounted
    }
  },
}

</script>