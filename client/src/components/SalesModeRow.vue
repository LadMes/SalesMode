<script setup lang="ts">
import type { SalesMode } from '@/models/sales-mode';

const salesMode = defineProps<SalesMode>();
</script>

<template>
    <tr>
        <td>{{ salesMode.family }}</td>
        <td>{{ salesMode.GFE }}</td>
        <td>{{ salesMode.name }}</td>
        <td>{{ salesMode.type }}</td>
        <td><RouterLink :to="'/salesmode/' + salesMode.id">Edit</RouterLink></td>
    </tr>
</template>