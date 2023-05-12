<script setup>
const title = 'Hello world!'
</script>

<template>
  <div m-60>
    <h1 text-normal font-900>
      {{ title }}
    </h1>
    <h2 text-normal font-900>
      {{ title }}
    </h2>
    <h3 text-normal font-900>
      {{ title }}
    </h3>
    <h4 text-normal font-900>
      {{ title }}
    </h4>
    <h5 text-normal font-900>
      {{ title }}
    </h5>
    <h6 text-normal font-900>
      {{ title }}
    </h6>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis totam ad, vero ratione quas, eos alias quisquam dolore quis odit. Nam alias rem possimus aspernatur a iusto magnam enim?</p>
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary">
        Tertiary
      </n-button>
      <n-button type="primary">
        Primary
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-space>
  </div>
</template>
