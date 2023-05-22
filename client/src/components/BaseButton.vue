<script setup lang="ts">
defineProps<{message: string}>();
</script>

<template>
    <button class="button">{{ message }}</button>
</template>

<style scoped>
.button {
    color: blueviolet;
}
</style>