<script setup lang="ts">
//import { ref } from "vue";
import SalesModeRow from "./SalesModeRow.vue";
import TheSalesModeTableHeader from "./TheSalesModeTableHeader.vue";
import BaseButton from "./BaseButton.vue";
import type { EPartASPart } from "@/models/epart-aspart";

interface Props {
  rows: EPartASPart[]
}
defineProps<Props>();

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
          
          @remove="" />
      </tbody>
      <tfoot>
        <BaseButton @click="" message="Add" />
      </tfoot>
    </table>
</template>

<style>
table, th, tr, td {
  border: 1px solid;
  border-collapse: collapse;
}
</style>