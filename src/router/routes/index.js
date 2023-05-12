// import Layout from '@/layout/index.vue'
import Home from '@/views/Homepage.vue'
import ErrorPage from '@/views/404/index.vue'

export const Routes = [
  {
    path: '/',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
  },
]
