<template>
    <Header/>

    <div class="main-body">
        <h1>Vista curso: Transformación y transiciones</h1>
        <article class="article-topic">
            <h3>Transiciones</h3>
            <p>El uso de transiciones nos permite aplicar modificaciones sobre un elemento teniendo en cuenta las cordenadas: X, Y, Z sin alterar el flow o espacio original del elemento</p>
            <p>El siguiente elemento al realizarle un HOVER muestra ejemplo de un translate.</p>

            <div class="card-translate  base">TRANSLATE</div>
        </article>
        <article class="article-topic">
            <h3>Trnasformaciones: rotate, scale, skew y matrix</h3>
            <p>Nos permiten aplicar modificaciones con base a X, Y, Z</p>

            <div class="content-card">
                <div class="card-scale base">SCALE</div>
                <div class="card-skew base">SKEW</div>
                <div class="card-rotate base">ROTATE</div>
            </div>
        </article>
        <article class="article-topic">
            <h3>Trnasformaciones: origin</h3>
            <p>Nos permiten modificar el punto origen de un elemento sobre el cual empezara la transformación. Se puede manejar con valores de texto o numericos: </p>

            <div class="card-rotate card-rotate--origin base">ROTATE</div>
        </article>
        <article class="article-topic">
            <h3>Trnasformaciones: style y perscpective</h3>
            <p>Nos permiten realizar modificaciones tipo 3D, manipulando posición, origin, perspectiva.</p>

            <div class="container-perspective">
                <div class="card-item"></div>
            </div>
        </article>
        <article class="article-topic">
            <h3>Trnasformaciones: backface visibility</h3>
            <p>Nos permiten realizar modificaciones de visualziación sobre un elemento transformable en 3D.</p>

            <div class="content-card">
                <div class="container-card">
                    <div class="face front">FACE FRONT</div>
                    <div class="face back">
                        <div class="rotate">FACE BACK</div>
                    </div>
                </div>
            </div>
        </article>
    </div>

    <Footer/>
</template>

<script>
import Header from '../../components/home/Header.vue'
import Footer from '../../components/home/Footer'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped lang="scss">
    .base {
        height: 100px;
        width: 100px;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgb(2,0,36,1) 0%, rgba(63,9,121,1) 42%, rgba(0,212,255,1) 100%);
        transition: transform 1s;
        color: white;
        text-align: center;
    }

    .card-translate {
        border-radius: 12px;

        &:hover {
            transform: translate(30px, 20px);
        }
    }

    .content-card {
        display: flex;
        gap: 16px;
    }

    .card-scale {
        border-radius: 15px;

        &:hover {
            transform: scale(0.8);
        }
    }

    .card-skew {
        border-radius: 15px;
        &:hover {
            transform: skew(20deg);
        }
    }

    .card-rotate {
        border-radius: 10px;
        &:hover {
            transform: rotate(90deg);
        }
    }

    .card-rotate--origin {
        transform-origin: right top;
    }

    .container-perspective {
        display: flex;
        justify-content: center;
        position: relative;
        height: 100px;
        width: 160px;
        border: solid 2px #45e145;
        border-radius: 8px;
        perspective: 80px;

        .card-item {
            position: absolute;
            height: 100px;
            width: 100px;
            border-radius: 6px;
            opacity: .5;
            background: linear-gradient(90deg, rgb(2,0,36,1) 0%, rgba(63,9,121,1) 42%, rgba(0,212,255,1) 100%);
            transform-style: preserve-3d;

            &:hover {
                transform: rotateX(40deg);
            }
        }
    }

    .container-card {
        height: 150px;
        width: 130px;
        border: solid 1px #0bacc1;

        transform-style: preserve-3d;
        transition: transform 0.5s;
        position: relative;

        &:hover {
            transform: rotateY(180deg);
        }

        .face {
            position: absolute;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
        }

        .face.front {
            background-color: #3e535d;
        }

        .face.back {
            background: linear-gradient(90deg, rgb(2,0,36,1) 0%, rgba(63,9,121,1) 42%, rgba(0,212,255,1) 100%);
            transform: rotateX(180deg);
            text-align: center;
            color: white;
            font-weight: bold;

            .rotate {
                transform: rotateY(180deg);
            }
        }

    }
</style>
