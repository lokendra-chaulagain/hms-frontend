import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TablesViewVue from '../views/TablesView.vue'
import TableDetail from '../views/TableDetail.vue'
import TableUpdate from '../views/TableUpdate.vue'
import TableAdd from '../views/TableAdd.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/tables',
      name: 'Tables',
      component: TablesViewVue
    },

    {
      path: '/tables/view/:id',
      name: 'table-detail',
      component: TableDetail
    },

    {
      path: '/tables/update/:id',
      component: TableUpdate
    },
    {
      path: '/tables/add',
      component: TableAdd
    },

    {
      path: '/profile',
      component: Profile
    }
  ]
})

export default router
