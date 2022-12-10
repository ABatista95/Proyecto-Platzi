<template>
    <Header message="Header-Init"/>

    <main>
        <p>Mi nombre es: {{ name }} y mi edad es: {{ age }} - Se altero</p>
        <div>
            <p v-for=" item in array_items"> Data name: {{ item.name }}</p>
            <button @click="FuntPru()">Agregar</button>
        </div>
    </main>

    <Footer/>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer"

export default {
    components: {
        Header,
        Footer
    },
    mounted(){},
    data(){
        return {
            name: 'Thor Batista',
            age: 26,
            array_items: [
                {
                    name: 'Thor 1',
                    ade: 25
                },
                {
                    name: 'Thor 2',
                    ade: 26
                },
                {
                    name: 'Thor 3',
                    ade: 27
                }
            ]
        }
    },
    methods: {
        FuntPru(){
            console.log('Invoca funt::')
        }
    }
}

</script>

<style scoped lang="scss">

</style>
