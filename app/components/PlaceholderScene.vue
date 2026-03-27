<script setup lang="ts">
defineProps<{
  theme: 'office' | 'tech'
}>()
</script>

<template>
  <div class="scene" :class="theme">
    <template v-if="theme === 'office'">
      <div class="office-bg" />
      <div class="desk" />
      <div class="paper paper-a" />
      <div class="paper paper-b" />
      <div class="tablet" />
      <div class="person left">
        <div class="arm" />
      </div>
      <div class="person right">
        <div class="arm" />
      </div>
    </template>

    <template v-else>
      <div class="tech-bg" />
      <div class="tech-hand" />
      <div class="cloud" />
      <div class="ring ring-a" />
      <div class="ring ring-b" />
      <div class="ring ring-c" />
      <div class="icon-box box-a" />
      <div class="icon-box box-b" />
      <div class="icon-box box-c" />
      <div class="icon-box box-d" />
    </template>
  </div>
</template>

<style scoped>
.scene {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.scene.office {
  background: linear-gradient(180deg, #dce8ef 0%, #f5f1ea 100%);
}

.office-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.66), rgba(255, 255, 255, 0.1) 40%, rgba(0, 0, 0, 0.05)),
    linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06));
}

.desk {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 36%;
  background: linear-gradient(180deg, #d6b48f 0%, #b98358 100%);
}

.paper,
.tablet {
  position: absolute;
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.paper-a {
  left: 30%;
  bottom: 18%;
  width: 90px;
  height: 64px;
  transform: rotate(-8deg);
}

.paper-b {
  left: 48%;
  bottom: 16%;
  width: 84px;
  height: 58px;
  transform: rotate(6deg);
}

.tablet {
  right: 18%;
  bottom: 18%;
  width: 84px;
  height: 62px;
  background: linear-gradient(180deg, #e9edf1, #cfd7de);
}

.person {
  position: absolute;
  bottom: 18%;
  width: 120px;
  height: 180px;
}

.person::before {
  content: '';
  position: absolute;
  top: 0;
  left: 36px;
  width: 46px;
  height: 54px;
  border-radius: 22px;
  background: linear-gradient(180deg, #f0c2a0, #d1956f);
}

.person::after {
  content: '';
  position: absolute;
  left: 18px;
  top: 40px;
  width: 90px;
  height: 128px;
  border-radius: 24px 24px 10px 10px;
  background: linear-gradient(180deg, #253646, #151f28);
}

.person.left {
  left: 16%;
}

.person.right {
  right: 4%;
}

.person .arm {
  position: absolute;
  top: 92px;
  width: 78px;
  height: 20px;
  border-radius: 999px;
  background: linear-gradient(180deg, #1f2b35, #141d24);
}

.person.left .arm {
  left: 34px;
  transform: rotate(18deg);
}

.person.right .arm {
  left: 0;
  transform: rotate(-20deg);
}

.scene.tech {
  background: linear-gradient(180deg, #0e1f35 0%, #132946 100%);
}

.tech-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 38% 56%, rgba(255, 188, 76, 0.2), transparent 16%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.07), transparent 34%);
}

.tech-hand {
  position: absolute;
  left: 18%;
  bottom: -2%;
  width: 120px;
  height: 180px;
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(43, 54, 75, 0.96), rgba(19, 29, 43, 0.96));
  transform: rotate(10deg);
}

.cloud {
  position: absolute;
  left: 36%;
  top: 44%;
  width: 78px;
  height: 36px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  bottom: 10px;
  background: inherit;
  border-radius: 999px;
}

.cloud::before {
  left: 8px;
  width: 22px;
  height: 22px;
}

.cloud::after {
  right: 10px;
  width: 28px;
  height: 28px;
}

.ring {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
}

.ring-a {
  left: 20%;
  top: 26%;
  width: 34px;
  height: 34px;
}

.ring-b {
  right: 22%;
  top: 28%;
  width: 38px;
  height: 38px;
}

.ring-c {
  right: 16%;
  bottom: 28%;
  width: 30px;
  height: 30px;
}

.icon-box {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.08);
}

.box-a {
  left: 28%;
  top: 52%;
}

.box-b {
  left: 60%;
  top: 30%;
}

.box-c {
  right: 24%;
  top: 52%;
}

.box-d {
  left: 46%;
  bottom: 18%;
}
</style>
