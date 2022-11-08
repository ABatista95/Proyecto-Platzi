import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./vue/components/home/Home')

// Lista rutas cursos
const TransitionsTransform = () => import('./vue/courses/TransitionsTransform.vue')

// Importe de componentes
const ListCurse = () => import('./vue/components/home/ListCurse.vue')

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'transitionsTransform',
        path: '/transitions_transform',
        component: TransitionsTransform
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
