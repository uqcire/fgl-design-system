<script setup>
import Sidebar from './componets/sidebar/index.vue'
</script>

<template>
  <div>
    <n-layout-sider
      bordered
      :native-scrollbar="false"
      :collapsed="false"
      width="360"
    >
      <Sidebar />
    </n-layout-sider>
  </div>
</template>
