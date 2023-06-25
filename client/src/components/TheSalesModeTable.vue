<script setup lang="ts">
//import { ref } from "vue";
import SalesModeRow from "./SalesModeRow.vue";
import TheSalesModeTableHeader from "./TheSalesModeTableHeader.vue";
import BaseButton from "./BaseButton.vue";
import type { EPartASPart } from "@/models/epart-aspart";

interface Props {
  rows: EPartASPart[],
}
defineProps<Props>();

const emit = defineEmits<{
  addRow: []
  removeRow: [rowId: number]
}>();

</script>

<template>
    <table>
      <thead>
        <TheSalesModeTableHeader />
      </thead>
      <tbody>
        <SalesModeRow 
          v-for="row in rows"
          :key="row.id" 
          v-bind="row"
          
          @remove="emit('removeRow', row.id)" />
      </tbody>
      <tfoot>
        <BaseButton @click="emit('addRow')" message="Add" />
      </tfoot>
    </table>
</template>

<style>
table, th, tr, td {
  border: 1px solid;
  border-collapse: collapse;
}
</style>