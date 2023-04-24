export const Routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Homepage.vue'),
    meta: {
      title: 'Homepage',
    },
  },
  {
    path: '/design-system',
    name: 'design-system',
    component: () => import('@/views/design-system/index.vue'),
    meta: {
      title: 'Design System',
    },
  },
]
