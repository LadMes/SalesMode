<script setup lang="ts">
import { ref } from 'vue';
import SalesModeRow from './SalesModeRow.vue';
import TheSalesModeTableHeader from './TheSalesModeTableHeader.vue';
import BaseButton from './BaseButton.vue';
import mockup from '../models/mockup';

const rows = ref(mockup);

function addRow() {
  const mirrorAssy: Part = {
    GP: "F10582/AF",
    reference: "8450003869",
    supplierNumber: "-",
    nameRus: "Зеркало наружное левое",
    nameEng: "MIRROR-OTR LH",
    mass: 1.6,
    partType: "A",
    quantity: 1
  };
  const mirrorAssyWithoutCover: Part = {
    GP: "F10582/KK",
    reference: "8466635869",
    supplierNumber: "111",
    nameRus: "Зеркало боковое с электроприводом и обогревом в сборе без задней крышки левое",
    nameEng: "Side mirror assembly with electric drive and heating without back cover left",
    mass: 1,
    partType: "B",
    quantity: 1
  };
  let count = rows.value.length;
  let fifth = {
        id: ++count,
        level: 1,
        family: "XGD",
        epart: mirrorAssy,
        aspart: mirrorAssyWithoutCover
  };
  rows.value = rows.value.concat(fifth);
}

function remove(rowId: number) {
  rows.value = rows.value.filter(row => row.id != rowId)
}

//function edit()

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
          
          @remove="remove(row.id)" />
      </tbody>
      <tfoot>
        <BaseButton @click="addRow" message="Add" />
      </tfoot>
    </table>
</template>

<style>
table, th, tr, td {
  border: 1px solid;
  border-collapse: collapse;
}
</style>