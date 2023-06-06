<script setup lang="ts">
import TheSalesModeTable from "../components/TheSalesModeTable.vue";
import { useSalesModeStore } from "../stores/sales-mode";

const store = useSalesModeStore();
</script>

<template>
  <main>
    <TheSalesModeTable :rows=store.table.rows />
  </main>
</template>

<style>

</style>