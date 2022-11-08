<script setup>
    import { useRouter } from "vue-router"
    const router = useRouter();

    const redirectCourse = () => {
        return router.push('/transitions_transform');
    }
</script>

<template>
    <nav>
        <ul>
            <li>
                <p @click="redirectCourse()">Cursos</p>
            </li>
            <li>
                <router-link to="/transitions_transform">Cursos</router-link>
            </li>
            <li>
                <router-link to="/">Contacto</router-link>
            </li>
        </ul>
    </nav>
</template>


