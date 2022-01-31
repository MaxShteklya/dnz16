<template>
    <agile class="intro"
           :autoplay="true"
           :pauseOnHover="false"
           :autoplay-speed="5000"
           :dots="false"
           @after-change="scale($event)">
        <div class="slide">
            <img src="http://gonthemes.info/iziclass/wp-content/uploads/2019/07/slider2.jpg" alt="">
        </div>
        <div class="slide">
            <img src="http://gonthemes.info/iziclass/wp-content/uploads/2019/07/slider1.jpg" alt="">
        </div>
        <template slot="prevButton"><i class="fa fa-angle-left"></i></template>
        <template slot="nextButton"><i class="fa fa-angle-right"></i></template>
    </agile>
</template>

<script>
import {VueAgile} from "vue-agile";

export default {
    name: "Intro",

    components: {
        agile: VueAgile
    },

    methods: {
        scale(event)
        {
            document.querySelectorAll(`.agile__slides--regular .slide img`).forEach((el) => {
                el.classList.remove('scaledAnimation');
            });

            document.querySelectorAll(`.agile__slides--regular .slide:nth-of-type(${event.currentSlide + 1}) img`).forEach((el) => {
                el.classList.add('scaledAnimation');
            });
        }
    }
}
</script>
