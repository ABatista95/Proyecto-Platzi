import { createRouter, createWebHistory } from 'vue-router'

// Rutas principales
const Home = () => import('./vue/views/Home')
const Courses = () => import('./vue/views/Courses')
const Contact = () => import('./vue/views/Contact')

// Rutas de cursos
const TransitionsTransform = () => import('./vue/views/courses/TransitionsTransform.vue')
const Parallax = () => import('./vue/views/courses/Parallax')

// Importe de componentes
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'courses',
        path: '/courses',
        component: Courses
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import(/* webpackChunkName: "contact" */'./vue/views/Contact') //Forma de importar vista.
    },

    {
        name: 'transitionsTransform',
        path: '/transitions-transform',
        component: TransitionsTransform
    },
    {
      name: 'parallax',
      path: '/parallax',
        component: Parallax,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
