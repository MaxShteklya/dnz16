<template>
    <div>
        <intro />
        <section class="our-mission">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center">
                       <h3 class="mb-4">
                           Мала дитина – то перлина,<br>
                           творіння ніжне, не просте,<br>
                           якщо до неї серце лине, вона і генієм росте.
                       </h3>
                        <p>
                            Ми створені, щоб надавати якісну освіту кожній дитині на засадах психологічного комфорту та
                            цілісного розвитку особистості.
                        </p>
                        <p>
                            А для цього ми:
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <img :src="'/images/our-mission.png'" alt="">
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-6 col-md-3">
                        <div class="mission-item">
                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                            <p>
                                Розвиваємо всі вісім видів інтелекту
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="mission-item">
                            <i class="fa fa-book" aria-hidden="true"></i>
                            <p>
                                Допомагаємо здобувати компетенції разом зі знаннями
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="mission-item">
                            <p>
                                Піклуємось про психологічний комфорт дітей
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="mission-item">
                            <p>
                                Розглядаємо навчання, як елемент розвитку всієї родини, а не тільки дитини
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Intro from "../components/Intro";

export default {
    name: "Home",

    components: {
        Intro
    }
}
</script>

