<script setup lang="ts">
import { ref } from "vue";
import { getSalesModes } from "../scripts/data-extractors";
import SalesModeRow from "@/components/SalesModeRow.vue";

const salesModes = ref(getSalesModes());
</script>

<template>
  <main>
    <table>
      <thead>
        <tr>
          <td>Family</td>
          <td>GFE</td>
          <td>Name</td>
          <td>Type</td>
          <td>Buttons</td>
        </tr>
      </thead>
      <tbody>
        <SalesModeRow v-for="salesMode in salesModes" :key="salesMode.id" v-bind="salesMode"/>
      </tbody>
    </table>
  </main>
</template>

<style>

</style>