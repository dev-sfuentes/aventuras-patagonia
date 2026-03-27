<script setup lang="ts">
import DownloadButton from '~/components/DownloadButton.vue'
import LanguageSwitchButton from '~/components/LanguageSwitchButton.vue'

defineProps<{
  languageTo?: string
  languageLabel?: string
  showDownload?: boolean
  downloadLabel?: string
}>()
</script>

<template>
  <nav class="site-top-actions" aria-label="Page actions">
    <LanguageSwitchButton
      v-if="languageTo && languageLabel"
      :to="languageTo"
      :label="languageLabel"
    />
    <DownloadButton v-if="showDownload && downloadLabel" :label="downloadLabel" />
  </nav>
</template>

<style scoped>
.site-top-actions {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

@media (max-width: 720px) {
  .site-top-actions {
    top: 0.75rem;
    right: 0.75rem;
  }
}

@media print {
  .site-top-actions {
    display: none;
  }
}
</style>
