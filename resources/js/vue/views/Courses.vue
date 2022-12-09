
<template>
    <Header/>

    <div>
        <h3>Lista de cursos</h3>

        <ul>
            <li>
                <router-link to="/transitions-transform"><span>Tema:</span> transiciones y animaciones</router-link>
            </li>
            <li>
                <router-link to="/parallax"><span>Tema:</span> Efecto parallax</router-link>
            </li>
        </ul>
    </div>

    <Footer/>
</template>

<script>
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped lang="scss">

</style>
