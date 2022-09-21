<template>
  <va-avatar :src="url" :size="44" />
</template>

<script setup lang="ts">
import { VaAvatar } from 'vuestic-ui'
import { computed } from 'vue'

const props = defineProps<{params: {value: string}}>()

const url = computed(() => props.params.value)
</script>

