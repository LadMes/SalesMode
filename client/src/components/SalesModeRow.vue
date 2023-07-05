<script setup lang="ts">
import type { SalesModeInfo } from '@/models/sales-mode-info';

const salesMode = defineProps<SalesModeInfo>();
</script>

<template>
    <tr>
        <td>{{ salesMode.family }}</td>
        <td>{{ salesMode.GFE }}</td>
        <td>{{ salesMode.name }}</td>
        <td>{{ salesMode.type }}</td>
        <td><RouterLink :to="'/salesmode/' + salesMode.id">Edit</RouterLink></td>
    </tr>
</template>@/models/sales-mode-info