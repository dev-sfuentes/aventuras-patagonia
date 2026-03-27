<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="site-action-button" :aria-label="label">
    <Icon name="heroicons:language" />
  </NuxtLink>
</template>

<style scoped>
.site-action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 1px solid rgba(89, 63, 33, 0.2);
  border-radius: 999px;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  background: rgba(255, 250, 241, 0.88);
  color: #2f2418;
  cursor: pointer;
  font: inherit;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(84, 58, 31, 0.12);
  backdrop-filter: blur(10px);
}

.site-action-button :deep(svg) {
  width: 1.15rem;
  height: 1.15rem;
}
</style>
