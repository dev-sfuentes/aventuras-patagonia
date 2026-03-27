<script setup lang="ts">
import flyerHeaderImage from '~/assets/flyer-header-image.jpg'
import logoImage from '~/assets/logo.png'
import WebsiteQrCode from '~/components/WebsiteQrCode.vue'
import type { FlyerContent } from '~/data/flyer'

defineProps<{
  content: FlyerContent
}>()
</script>

<template>
  <main class="flyer-shell">
    <article class="flyer-card">
      <section class="flyer-section flyer-header" aria-label="Header section">
        <img
          :src="flyerHeaderImage"
          alt=""
          class="flyer-header-image"
        >

        <div class="header-logo-diamond" aria-hidden="true" />

        <div class="header-diamond" aria-hidden="true" />

        <div class="header-brand-title">
          <span>AVENTURAS</span>
          EN LA 
          <span>PATAGONIA</span>
        </div>
        
        <img
          :src="logoImage"
          alt="Aventuras en la Patagonia logo"
          class="header-logo-image"
        >
      </section>

      <section class="flyer-section flyer-about" aria-label="About us section">
        <div class="flyer-about-bar" aria-hidden="true" />
        <div class="flyer-about-copy">
          <div class="flyer-about-heading">
            <p class="flyer-about-kicker">Punta Arenas, Patagonia</p>
            <h2>{{ content.sections[0]?.title }}</h2>
          </div>

          <p
            v-for="(line, lineIndex) in content.sections[0]?.body"
            :key="`${content.sections[0]?.title}-${lineIndex}`"
            :class="[
              'flyer-about-paragraph',
              { 'flyer-about-lead': lineIndex === 0 },
              {
                'flyer-about-note':
                  lineIndex === (content.sections[0]?.body.length ?? 0) - 1 &&
                  (content.sections[0]?.body.length ?? 0) > 2,
              },
            ]"
          >
            {{ line }}
          </p>
        </div>
      </section>

      <section class="flyer-section flyer-contact" aria-label="Contact section">
        <div class="contact-details">
          <div class="contact-heading">
            <p class="contact-kicker">{{ content.contactEyebrow }}</p>
            <h2>{{ content.contactTitle }}</h2>
          </div>

          <div class="contact-row contact-row-top">
            <article
              v-for="(card, cardIndex) in content.footerCards.slice(0, 2)"
              :key="`${card.title}-${cardIndex}`"
              class="contact-card"
            >
              <div class="contact-card-head">
                <span class="contact-card-icon" aria-hidden="true">
                  <Icon :name="card.icon" />
                </span>
                <h3>{{ card.title }}</h3>
              </div>
              <p v-for="(line, lineIndex) in card.lines" :key="`${card.title}-${lineIndex}`">
                {{ line }}
              </p>
            </article>
          </div>

          <div class="contact-row contact-row-bottom">
            <article
              v-for="(card, cardIndex) in content.footerCards.slice(2, 4)"
              :key="`${card.title}-${cardIndex + 2}`"
              class="contact-card"
            >
              <div class="contact-card-head">
                <span class="contact-card-icon" aria-hidden="true">
                  <Icon :name="card.icon" />
                </span>
                <h3>{{ card.title }}</h3>
              </div>
              <p v-for="(line, lineIndex) in card.lines" :key="`${card.title}-${lineIndex}`">
                {{ line }}
              </p>
            </article>
          </div>
        </div>

        <aside class="contact-qr">
          <div class="contact-qr-card">
            <p class="contact-qr-caption">{{ content.qrCaption }}</p>
            <WebsiteQrCode :value="content.qrValue" :label="content.qrLabel" />
          </div>
        </aside>
      </section>
    </article>
  </main>
</template>

<style scoped>
.flyer-shell {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(180deg, #d8d5d2 0%, #c8c5c2 100%);
}

.flyer-card {
  --flyer-red-900: rgb(122, 22, 34);
  --flyer-red-800: #91212c;
  --flyer-red-700: #b33239;
  --flyer-red-600: #c95446;
  --flyer-red-100: #fdeeee;
  --flyer-red-050: #fff6f4;
  --flyer-red-ink: #6d1a22;
  width: min(100%, 210mm);
  min-height: 320mm;
  aspect-ratio: 210 / 297;
  margin: 0 auto;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
  display: grid;
  grid-template-rows: 3.4fr 2fr 1.8fr;
}

.flyer-section {
  min-height: 0;
}

.flyer-header {
  position: relative;
  overflow: hidden;
}

.flyer-header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-logo-diamond {
  position: absolute;
  top: -30%;
  right: -35%;
  width: 100%;
  height: 50%;
  aspect-ratio: 1;
  background: rgba(122, 22, 34, 0.9);
  transform: rotate(40deg);
  transform-origin: center;
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.16);
}

.header-logo-image {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  display: block;
  width: min(20%, 9rem);
  object-fit: contain;
  filter: drop-shadow(0 0.2rem 0.45rem rgba(0, 0, 0, 0.28));
}

.header-diamond {
  position: absolute;
  bottom: -5%;
  left: -45%;
  width: 100%;
  height: 50%;
  aspect-ratio: 1;
  background: linear-gradient(
    130deg,
    rgba(122, 22, 34, 0.1) 0%,
    rgba(122, 22, 34, 0.5) 25%,
    rgba(122, 22, 34, 1) 62%
  );
  transform: rotate(40deg);
  transform-origin: center;
}

.header-brand-title {
  display: grid;
  justify-items: center;
  position: absolute;
  font-size: 1.3rem;
  left: 1.35rem;
  bottom: 1.7rem;
  max-width: 18rem;
  color: #f7fbff;
  font-weight: 900;
  text-shadow:
    0 2px 8px rgba(5, 17, 34, 0.55),
    0 0 1px rgba(5, 17, 34, 0.85);
}

.header-brand-title span {
  display: block;
  font-size: 2rem;
  letter-spacing: 0.08em;
}

.flyer-about {
  position: relative;
  display: grid;
  align-content: start;
  background:
    radial-gradient(circle at top right, rgba(208, 173, 91, 0.18), transparent 26%),
    linear-gradient(180deg, var(--flyer-red-100) 0%, #fbf3ef 100%);
}

.flyer-about-bar {
  width: 100%;
  height: 1.2rem;
  background: var(--flyer-red-900);
  position: relative;
}

.flyer-about-bar::after {
  content: "";
  position: absolute;
  inset: auto 0 -0.18rem 0;
  height: 0.18rem;
  background: linear-gradient(90deg, #d7a74f 0%, #f0d596 50%, #d7a74f 100%);
}

.flyer-about-copy {
  margin: 0 1.1rem 1rem;
  padding: 1.4rem 1.55rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 1.3rem 1.3rem;
  box-shadow:
    0 0.9rem 1.8rem rgba(145, 33, 44, 0.08),
    inset 0 0 0 1px rgba(145, 33, 44, 0.06);
  position: relative;
}

.flyer-about-copy::before {
  content: "";
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(215, 167, 79, 0.2) 0%, rgba(215, 167, 79, 0) 72%);
}

.flyer-about-heading,
.flyer-about-copy h2,
.flyer-about-copy p {
  margin: 0;
}

.flyer-about-heading {
  position: relative;
  padding-bottom: 0.9rem;
  margin-bottom: 0.95rem;
}

.flyer-about-heading::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 5rem;
  height: 0.2rem;
  border-radius: 999px;
  background: linear-gradient(90deg, #d7a74f 0%, var(--flyer-red-800) 100%);
}

.flyer-about-kicker {
  color: #9a6a22;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.flyer-about-copy h2 {
  color: var(--flyer-red-800);
  font-size: 1.34rem;
  font-weight: 900;
  line-height: 1.1;
  margin-top: 0.28rem;
}

.flyer-about-paragraph {
  margin-top: 0.85rem;
  color: #38475a;
  font-size: 0.82rem;
  line-height: 1.72;
  max-width: 94%;
}

.flyer-about-lead {
  margin-top: 0;
  color: var(--flyer-red-ink);
  font-size: 0.97rem;
  font-weight: 600;
  line-height: 1.75;
}

.flyer-about-note {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  margin-top: 1rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(179, 50, 57, 0.09);
  color: var(--flyer-red-800);
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.4;
}

.flyer-contact {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
  background:
    radial-gradient(circle at bottom right, rgba(215, 167, 79, 0.18), transparent 26%),
    linear-gradient(135deg, var(--flyer-red-900) 0%, var(--flyer-red-800) 55%, var(--flyer-red-600) 100%);
  border-top: 1px solid rgba(18, 28, 44, 0.08);
  padding: 1rem 1rem 1.65rem;
}

.contact-details {
  flex: 1 1 auto;
  display: grid;
  gap: 0.8rem;
  padding: 0.95rem 1rem;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 1.2rem;
  box-shadow:
    0 0.8rem 1.8rem rgba(4, 16, 32, 0.16),
    inset 0 0 0 1px rgba(145, 33, 44, 0.05);
}

.contact-heading {
  margin: 0;
}

.contact-kicker {
  margin: 0;
  color: #8c631e;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.contact-heading h2 {
  margin: 0.18rem 0 0;
  color: var(--flyer-red-800);
  font-size: 1.12rem;
  font-weight: 900;
}

.contact-row {
  display: flex;
  gap: 1.25rem;
}

.contact-row-top .contact-card:first-child {
  flex: 0 0 43%;
}

.contact-row-top .contact-card:last-child {
  flex: 1 1 auto;
}

.contact-row-bottom .contact-card:first-child {
  flex: 1 1 auto;
}

.contact-row-bottom .contact-card:last-child {
  flex: 0 0 45%;
}

.contact-card {
  min-width: 0;
  padding: 0.7rem 0.8rem;
  background: linear-gradient(180deg, #ffffff 0%, var(--flyer-red-050) 100%);
  border-radius: 1rem;
  box-shadow:
    0 0.6rem 1.2rem rgba(145, 33, 44, 0.08),
    inset 0 0 0 1px rgba(145, 33, 44, 0.06);
}

.contact-card-head {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.35rem;
}

.contact-card h3,
.contact-card p {
  margin: 0;
}

.contact-card-icon {
  width: 1.55rem;
  height: 1.55rem;
  display: inline-grid;
  place-items: center;
  color: var(--flyer-red-800);
  background: linear-gradient(180deg, #f6ddd8 0%, #fff0eb 100%);
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgba(145, 33, 44, 0.12);
}

.contact-card-icon :deep(svg) {
  width: 0.88rem;
  height: 0.88rem;
}

.contact-card h3 {
  color: var(--flyer-red-800);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.contact-card p {
  margin-top: 0.22rem;
  color: #38475a;
  font-size: 0.63rem;
  line-height: 1.42;
  word-break: break-word;
}

.contact-qr {
  flex: 0 0 8rem;
  align-self: stretch;
  display: flex;
}

.contact-qr-card {
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 1.2rem;
  box-shadow:
    0 0.8rem 1.8rem rgba(4, 16, 32, 0.18),
    inset 0 0 0 1px rgba(145, 33, 44, 0.05);
}

.contact-qr-caption {
  margin: 0;
  color: #8c631e;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
}

.contact-qr :deep(.qr-wrap) {
  width: 100%;
  max-width: 5rem;
  padding: 1rem;
  border-radius: 12px;
  background: #ffffff;
}


</style>
