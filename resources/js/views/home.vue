<template>
    <div>
        <intro />
        <section class="our-mission">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center order-1 order-md-0">
                        <h2>
                            Розмалюємо життя яскравими барвами!
                        </h2>
                        <div class="divider"></div>
                        <p>
                            Ми створені, щоб надавати якісну освіту кожній дитині на засадах психологічного комфорту та
                            цілісного розвитку особистості.
                        </p>
                        <p>
                            <strong>А для цього ми:</strong>
                        </p>
                    </div>
                    <div class="col-12 col-md-6 order-0 order-md-1 mb-5 mb-md-0">
                        <img :src="'/images/our-mission.png'" alt="">
                    </div>
                </div>
                <div class="row mt-5 mission-items">
                    <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="mission-item">
                            <i class="fas fa-brain"></i>
                            <p>
                                Розвиваємо всі вісім видів інтелекту
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="mission-item">
                            <i class="fas fa-users"></i>
                            <p>
                                Розглядаємо навчання, як елемент розвитку всієї родини
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="mission-item">
                            <i class="fas fa-book-open"></i>
                            <p>
                                Допомагаємо здобувати компетенції разом зі знаннями
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="mission-item">
                            <i class="fas fa-theater-masks"></i>
                            <p>
                                Піклуємось про психологічний комфорт дітей
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

