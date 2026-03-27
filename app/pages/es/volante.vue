<script setup lang="ts">
import FlyerSheet from '~/components/FlyerSheet.vue'
import SiteTopActions from '~/components/SiteTopActions.vue'
import { flyerContent } from '~/data/flyer'
</script>

<template>
  <div>
    <SiteTopActions
      language-to="/en/flyer"
      :language-label="flyerContent.es.languageSwitchLabel"
      :show-download="true"
      :download-label="flyerContent.es.downloadLabel"
    />
    <FlyerSheet :content="flyerContent.es" />
  </div>
</template>
