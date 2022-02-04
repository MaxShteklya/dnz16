<template>
    <div>
        <intro />
        <section class="our-mission">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center order-1 order-md-0" data-aos="slide-right">
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
                    <div class="col-12 col-md-6 order-0 order-md-1 mb-5 mb-md-0" data-aos="slide-left">
                        <img :src="'/images/our-mission.png'" alt="">
                    </div>
                </div>
                <div class="row mt-5 mission-items" data-aos="fade-up">
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
        <section class="blog-popular-items">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-12 text-center">
                        <h2>Популярні статті</h2>
                        <div class="divider-center"></div>
                    </div>
                </div>
                <div class="row" data-aos="fade-up">
                    <div class="col-12 col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-image">
                                <a href="#">
                                    <img src="https://expoupdate.se/wp-content/uploads/2021/09/Universal-Childrens-Day.jpg" class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="#" class="profile">
                                    <img :src="'/images/avatars/1.png'" alt="">
                                    <p class="card-text">Олена Штекля</p>
                                </a>
                                <a href="#">
                                    <h5 class="card-title">Card title</h5>
                                </a>
                                <p class="card-text text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    (3)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-image">
                                <a href="#">
                                    <img src="https://expoupdate.se/wp-content/uploads/2021/09/Universal-Childrens-Day.jpg" class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="#" class="profile">
                                    <img :src="'/images/avatars/1.png'" alt="">
                                    <p class="card-text">Олена Штекля</p>
                                </a>
                                <a href="#">
                                    <h5 class="card-title">Card title</h5>
                                </a>
                                <p class="card-text text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    (1)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-image">
                                <a href="#">
                                    <img src="https://expoupdate.se/wp-content/uploads/2021/09/Universal-Childrens-Day.jpg" class="card-img-top" alt="...">
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="#" class="profile">
                                    <img :src="'/images/avatars/1.png'" alt="">
                                    <p class="card-text">Олена Штекля</p>
                                </a>
                                <a href="#">
                                    <h5 class="card-title">Card title</h5>
                                </a>
                                <p class="card-text text-warning">
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    (0)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="why-us">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://st2.depositphotos.com/1000350/5402/i/950/depositphotos_54020253-stock-photo-learning-english-concept.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>Вчимо англійську мову</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://izhevsk.ru/forums/icons/forum_pictures/asyncupload/572719/2016/9/25/1474814496U572719TtPj7643081263_orig.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>Використовуємо інтерактивні дошки на заняттях</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://tickikids.ams3.cdn.digitaloceanspaces.com/z1.cache/gallery/activities/30476/image_5bb74a0ca18ad3.47230595.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>Дбаємо про безпеку та комфорт дітей, а також повністю відкриті до батьків</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://www.eg.ru/wp-content/uploads/2020/01/111111111102923.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>Надсилаємо щоденний фото звіт із занять в батьківські вайбер-групи</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://kids.cooperation.ru/admission/the-period-of-adaptation/1.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>З повагою ставимося до кожної дитини та завжди знаходимо індивідуальний підхід</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://np.pl.ua/wp-content/uploads/2020/06/dytsadok.png" alt="">
                        </div>
                        <div class="desc">
                            <h4>Розташовані у приміщенні з просторою закритою територією</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://mega.ru/upload/resize_cache/iblock/ba9/1200_1600_2/ba9391c87b21693a285255bbd536f57b.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>Працюємо з 8:00 до 18:30, що є важливою умовою для батьків, які багато працюють</h4>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="image">
                            <img src="https://grade.ua/app/uploads/2019/06/pdd_babiy_27.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h4>Постійно розвиваємось, вдосконалюємось та впроваджуємо інновації</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <contact-me-section />
    </div>
</template>

<script>
import Intro from "../components/Intro";
import ContactMeSection from "../components/ContactMeSection";

export default {
    name: "Home",

    components: {
        Intro,
        ContactMeSection
    }
}
</script>

