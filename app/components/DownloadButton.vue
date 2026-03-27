<script setup lang="ts">
defineProps<{
  label: string
}>()

const printPage = () => {
  window.print()
}
</script>

<template>
  <button class="site-action-button" type="button" :aria-label="label" @click="printPage">
    <Icon name="heroicons:arrow-down-tray" />
  </button>
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
  box-shadow: 0 10px 30px rgba(84, 58, 31, 0.12);
  backdrop-filter: blur(10px);
}

.site-action-button :deep(svg) {
  width: 1.15rem;
  height: 1.15rem;
}
</style>
