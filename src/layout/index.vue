<script setup>
defineOptions({ name: 'Layout' })
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px" class="bg-[#092147]">
      <slot name="header" />
    </n-layout-header>
    <n-layout has-sider position="absolute" style="top: 64px">
      <n-layout-sider class="bg-[#0C2C5E] text-white" content-style="padding: 12px;" width="60">
        <slot name="sider" />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;">
        <slot name="content" />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
