<script setup lang="ts">
import FlyerSheet from '~/components/FlyerSheet.vue'
import SiteTopActions from '~/components/SiteTopActions.vue'
import { flyerContent } from '~/data/flyer'
</script>

<template>
  <div>
    <SiteTopActions
      language-to="/es/volante"
      :language-label="flyerContent.en.languageSwitchLabel"
      :show-download="true"
      :download-label="flyerContent.en.downloadLabel"
    />
    <FlyerSheet :content="flyerContent.en" />
  </div>
</template>
