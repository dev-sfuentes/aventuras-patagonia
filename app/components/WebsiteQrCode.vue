<script setup lang="ts">
import QRCode from 'qrcode'

const props = defineProps<{
  value: string
  label: string
}>()

const svg = await QRCode.toString(props.value, {
  type: 'svg',
  margin: 1,
  width: 180,
  color: {
    dark: '#17110d',
    light: '#ffffff',
  },
})
</script>

<template>
  <div class="qr-wrap" :aria-label="label" role="img" v-html="svg" />
</template>

<style scoped>
.qr-wrap {
  display: grid;
  place-items: center;
  padding: 0.55rem;
  border-radius: 14px;
  background: #fff;
}

.qr-wrap :deep(svg) {
  width: 100%;
  height: auto;
  display: block;
}
</style>
