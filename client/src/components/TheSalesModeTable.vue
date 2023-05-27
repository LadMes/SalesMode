<script setup lang="ts">
//import { ref } from "vue";
import SalesModeRow from "./SalesModeRow.vue";
import TheSalesModeTableHeader from "./TheSalesModeTableHeader.vue";
import BaseButton from "./BaseButton.vue";
import { useSalesModeStore } from "../stores/sales-mode";

const store = useSalesModeStore();

</script>

<template>
    <table>
      <thead>
        <TheSalesModeTableHeader />
      </thead>
      <tbody>
        <SalesModeRow 
          v-for="row in store.rows" 
          :key="row.id" 
          v-bind="row"
          
          @remove="store.remove(row.id)" />
      </tbody>
      <tfoot>
        <BaseButton @click="store.addRow" message="Add" />
      </tfoot>
    </table>
</template>

<style>
table, th, tr, td {
  border: 1px solid;
  border-collapse: collapse;
}
</style>