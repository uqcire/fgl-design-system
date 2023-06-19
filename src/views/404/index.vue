<script setup>
import Layout from '@/layout/index.vue'
</script>

<template>
  <Layout>
    <template #header>
      <div class="text-2xl">
        404
      </div>
    </template>
    <template #sider>
      <div>sider</div>
    </template>
    <template #content>
      <n-space vertical align="center">
        <h2 class="my-1">
          404 - Page not found!
        </h2>
        <img src="@/assets/img/404.svg" class="mb-2 h-auto w-[640px]">
        <n-button type="info" size="large">
          <router-link to="/">
            Go back
          </router-link>
        </n-button>
      </n-space>
    </template>
  </layout>
</template>
