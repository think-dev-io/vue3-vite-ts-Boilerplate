export default [
  {
    component: () => import('@/views/Home.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('@/views/About.vue'),
    name: 'about',
    path: '/about',
  },
]
