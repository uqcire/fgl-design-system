import ErrorPage from '@/views/404/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

export const Routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
    meta: {
      title: '404',
    },
  },
]
