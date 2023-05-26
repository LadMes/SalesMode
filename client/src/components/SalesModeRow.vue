<script setup lang="ts">
import { type EPartASPart } from '../models/epartaspart';
import BaseButton from './BaseButton.vue';
import { RouterLink } from 'vue-router'

const row = defineProps<EPartASPart>()
</script>

<template>
	<tr>
        <td>{{ row.id }}</td>
        <td>{{ row.level }}</td>
        <td>{{ row.family }}</td>
        <td>{{ row.epart.GP }}</td>
        <td>{{ row.epart.reference }}</td>
        <td>{{ row.epart.nameRus }}</td>
        <td>{{ row.epart.nameEng }}</td>
        <td>{{ row.aspart.GP }}</td>
        <td>{{ row.aspart.reference }}</td>
        <td>{{ row.aspart.supplierNumber }}</td>
        <td>{{ row.aspart.nameRus }}</td>
        <td>{{ row.aspart.nameEng }}</td>
        <td>{{ row.aspart.mass }}</td>
        <td>{{ row.aspart.partType }}</td>
        <td>{{ row.aspart.quantity }}</td>
        <td><RouterLink :to="'/edit/' + row.id">Edit</RouterLink></td>
        <td><BaseButton @click="$emit('remove')" message="Remove" /></td>
    </tr>
</template>