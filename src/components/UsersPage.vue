<template>
  <div class="d-flex">
    <va-input
      v-model="filter"
      placeholder="Filter..."
    />
    <va-spacer/>
    <va-button @click="createUser()" icon="add" text-color="white" color="success" />
  </div>
  <div style="height: 300px; width: 100%;">
    <ag-grid-vue
      class="ag-theme-vuestic"
      style="width: 100%; height: 100%;"
      :columnDefs="columnDefs"
      :rowData="reactiveUsers"
      :isExternalFilterPresent="() => true"
      :doesExternalFilterPass="doesExternalFilterPass"
      @grid-ready="onGridReady"
      :modules="modules"
      :context="agGridContext"
    />
  </div>
  <va-modal
    :model-value="!!selectedUser"
    ok-text="Save"
    cancel-text="Cancel"
    @cancel="selectedUser = null"
    @ok="saveUser()"
  >
    <va-input class="mb-3 d-block" label="Image" v-model="selectedUser.image"/>
    <va-input class="mb-3 d-block" label="Name" v-model="selectedUser.name"/>
    <va-input class="mb-3 d-block" label="Email" v-model="selectedUser.email"/>
  </va-modal>
</template>

<script setup lang="ts">
import { VaInput, VaSpacer, VaButton, VaModal } from 'vuestic-ui'
import { AgGridVue } from '@ag-grid-community/vue3'
import {
  ClientSideRowModelModule,
} from '@ag-grid-community/client-side-row-model'
import { User, users } from '../data/users'
import UserImage from './UserImage.vue'
import UserActive from './UserActive.vue'
import UserActions from './UserActions.vue'
import { ref, watch } from 'vue'

const reactiveUsers = ref(users)

const filter = ref('')
const selectedUser = ref<User | null>(null)
let gridApi: any = null

const onGridReady = (params: any) => {
  gridApi = params.api
}

watch(() => filter.value, () => {
  gridApi.onFilterChanged()
})

const doesExternalFilterPass = ({ data: user }: {user: User}) => {
  return JSON.stringify(user).includes(filter.value)
}

const modules = [ClientSideRowModelModule]

const editUser = (user: User) => {
  selectedUser.value = { ...user }
}

const removeUser = (userToRemove: User) => {
  reactiveUsers.value = reactiveUsers.value.filter(user => user !== userToRemove)
}

const createUser = () => {
  selectedUser.value = {
    id: Math.ceil(Math.random()*10000),
    image: 'https://picsum.photos/id/100/50/50',
    name: '',
    email: '',
    active: true,
  }
}

const saveUser = () => {
  const currentUser = selectedUser.value
  selectedUser.value = null

  if (!currentUser) {
    return
  }

  const users = reactiveUsers.value
  const existingUser = users.find(user => user.id === currentUser.id)

  if (existingUser) {
    reactiveUsers.value = reactiveUsers.value.map(user => existingUser === user ? currentUser : user)
  } else {
    reactiveUsers.value.push(currentUser)
  }
}

const agGridContext = {
  editUser,
  removeUser,
}

const columnDefs = [
  { field: 'image', headerName: '', cellRenderer: UserImage, width: 65 },
  { field: 'name', sortable: true },
  { field: 'email', sortable: true },
  { field: 'active', cellRenderer: UserActive, width: 75, sortable: true },
  { field: 'active',
    headerName: '',
    cellRenderer: UserActions,
    width: 85
  },
]
</script>

<style lang="scss">
@import "@vuestic/ag-grid-theme/index.scss";
</style>
