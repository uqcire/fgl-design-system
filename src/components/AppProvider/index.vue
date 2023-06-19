<script setup>
const themeOverrides = {
  common: {
    primaryColor: '#092147FF',
    primaryColorHover: '#0F3674FF',
    primaryColorPressed: ' #061630FF',
    primaryColorSuppl: '#0F3674FF',
    fontSize: '16px',
    lineHeight: '1.5',
    fontSizeMedium: '16px',
    fontSizeSmall: '9.89px',
    fontSizeLarge: '25.89px',
    fontSizeHuge: '41.89px',
    fontSizeTiny: '6.11px',
    fontSizeMini: '3.78px',
    successColorHover: '#2aa864FF',
    successColor: '#207f4cFF',
    successColorPressed: '#1b6b40FF',
    successColorSuppl: '#2AA864FF',
    infoColor: '#d1d2d1FF',
    infoColorHover: '#EBEBEBFF',
    infoColorSuppl: '#EBEBEBFF',
    infoColorPressed: '#C4C5C4FF',
    warningColor: '#FFD111FF',
    warningColorPressed: '#f7c700FF',
    warningColorHover: '#FFDB44FF',
    warningColorSuppl: '#FFDB44FF',
    errorColor: '#CC2200FF',
    errorColorHover: '#ff2a00FF',
    errorColorSuppl: '#ff2a00FF',
    errorColorPressed: '#B31E00FF',
    fontWeight: '500',
    fontWeightStrong: '700',
    dividerColor: 'rgba(147, 149, 151, 1)',
    borderColor: 'rgba(186, 187, 189, 1)',
    textColorBase: '#2D2E36FF',
    textColor3: 'rgba(114, 118, 138, 1)',
    textColor2: 'rgba(91, 94, 110, 1)',
    textColor1: 'rgba(68, 70, 82, 1)',
  },
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <slot />
  </n-config-provider>
</template>
