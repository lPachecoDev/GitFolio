
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Home.vue')
    }, {
      path: '/curriculum',
      component: () => import('pages/Curriculum.vue')
    }, {
      path: '/contact',
      component: () => import('pages/Contact.vue')
    }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
