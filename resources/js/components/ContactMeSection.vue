<template>
    <section class="contact-me-section">
        <flux-parallax
            src="http://gonthemes.info/iziclass/wp-content/uploads/2019/07/bg-testimonial.jpg?id=6082">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <input type="text">
                    </div>
                </div>
            </div>
        </flux-parallax>
    </section>
</template>

<script>
import { FluxParallax } from 'vue-flux';

export default {
    name: "ContactMeSection",

    components: {
        FluxParallax
    },
}
</script>
