<template>
  <div>
    <va-button flat icon="edit" @click="editUser(user)" />
    <va-button flat icon="close" @click="removeUser(user)" />
  </div>
</template>

<script setup lang="ts">
import { VaButton } from 'vuestic-ui'
import { computed, reactive } from 'vue'
import { User } from '../data/users'

const props = defineProps<{params: {data: User, context: {
  editUser: (user: User) => {},
  removeUser: (user: User) => {},
}}}>()

const { editUser, removeUser } = props.params.context

const user = computed(() => reactive(props.params.data))
</script>

