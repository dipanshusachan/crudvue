import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../pages/admin/Admin.vue'
import Form from '../pages/admin/Form.vue'
import FoCreate from '../pages/admin/FoCreate.vue'
import FoEdit from '../pages/admin/FoEdit.vue'
// import Main from '../pages/Main.vue'

const routes = [
  // {
  //   path: '/main', component: Main
  // },
  {
    path: '/admin',
    component: Admin,
    name: 'Admin',
    children: [
      { 
        path: 'Form', 
        component: Form,
        name: 'Form' 
      },
      { 
        path: '/', 
        component: FoCreate,
        name: 'FoCreate' 
      },
      { 
        path: 'Form/:id/edit', 
        component: FoEdit,
        name: 'FoEdit', 
        props: true 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router