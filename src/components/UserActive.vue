<template>
  <va-switch class="user-active" v-model="user.active" size="small" />
</template>

<script setup lang="ts">
import { VaSwitch } from 'vuestic-ui'
import { computed, reactive } from 'vue'
import { User } from '../data/users'

const props = defineProps<{params: {data: User}}>()

// AG Grid strips reactivity for some reason, so we have to force it back.
const user = computed(() => reactive(props.params.data))
</script>

<style>
.user-active {
  margin-top: 13px;
}
</style>

