<template>
    <Header/>

    <div class="main-body">
        <h1>Vista curso: Efecto parallax</h1>

        <article class="article-topic">
            <h3>Parallax: Estructura</h3>
            <p>Efecto que nos permite tener movimiento en la profundidad de la vista empleando capaz</p>
            <div class="parallax-container">
                <div class="image image__backgroud">
                    <img class="image--img" src="https://raw.githubusercontent.com/RetaxMaster/rocket-parallax/main/images/Sky.png" alt="images">
                </div>

                <div class="image image__smoke">
                    <img class="image--img" src="https://raw.githubusercontent.com/RetaxMaster/rocket-parallax/main/images/Smoke.png" alt="images">
                </div>

                <div class="image image__stars">
                    <img class="image--img" src="https://raw.githubusercontent.com/RetaxMaster/rocket-parallax/main/images/Stars.png" alt="images">
                </div>

                <div class="image image__rocket">
                    <img class="image--img" src="https://raw.githubusercontent.com/RetaxMaster/rocket-parallax/main/images/Rocket.png" alt="images">
                </div>
            </div>
        </article>
    </div>

    <Footer/>
</template>

<script>
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'

export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped lang="scss">
    .parallax-container {
        position: relative;
        margin: 0 auto;
        height: 100vh;
        width: 100%;
        perspective: 8px;
        perspective-origin: 50%;
        overflow-x: hidden;
        overflow-y: scroll;


        .image {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            text-align: center;
        }

        .image--img {
            height: auto;
            max-width: 100%;
        }

        .image__backgroud {
            /*transform: translateZ(0px) scale(1);
            transform-origin: 0 50%;*/
        }

        .image__smoke {
            /*transform: translateZ(5px) scale(2.375);
            transform-origin: 50%;*/
        }

        .image__stars {
            /*transform: translateZ(-1px) scale(0.65);
            transform-origin: 50%;*/
        }

        .image__rocket {
            /*transform: translateZ(-1px) scale(0.65);
            transform-origin: 50%;*/
        }
    }
</style>
