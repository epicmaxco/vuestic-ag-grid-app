<template>
  <div style="height: 300px; width: 100%;">
    <ag-grid-vue
      class="ag-theme-vuestic"
      style="width: 100%; height: 100%;"
      :columnDefs="columnDefs"
      :rowData="users"
      :modules="modules"
    />
  </div>
</template>

<script setup lang="ts">
import { AgGridVue } from '@ag-grid-community/vue3'
import {
  ClientSideRowModelModule,
} from '@ag-grid-community/client-side-row-model'
import { users } from '../data/users'

const modules = [ClientSideRowModelModule]

const columnDefs = [
  { field: 'name' },
  { field: 'email' },
]
</script>

<style lang="scss">
@import "@vuestic/ag-grid-theme/index.scss";
</style>
