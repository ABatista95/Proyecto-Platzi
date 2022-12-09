<script setup>

    // Esto es la forma antigua de manejar Vue.js
    import { useRouter } from "vue-router"
    import { computed, onMounted, ref } from 'vue'

    const router = useRouter();

    const redirectCourse = () => {
        return router.push('/');
    }

    const props = defineProps({
        message: {
            type: String,
            required: true
        }
    })

    onMounted(() => {
        console.log('Forma de cargar msm en mounted.')
    })
</script>

<template>
    <nav>
        <ul>
            <li><a @click="redirectCourse()">Inicio</a></li>
            <li><router-link to="/Courses">Cursos</router-link></li>
            <li><router-link to="/contact">Contacto</router-link></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
 nav {
     height: 50px;
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: center;
     background-color: #4a5568;
 }

 ul {
     list-style: none;
     margin: 0;
     padding: 0;

     li {
         display: inline-block;
         text-decoration: none;

         a {
             color: white;
             display: block;
             padding: 15px;
             text-decoration: none;

             &.router-link-exact-active {
                 color: red;
             }
             &:hover{
                 background-color: #042448;
             }
         }
     }
 }

</style>


