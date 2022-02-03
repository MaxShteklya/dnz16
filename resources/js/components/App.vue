<template>
    <div id="app">
        <loading ref="loading" />

        <component :is="layout">
            <transition name="page" mode="out-in">
                <router-view/>
            </transition>
        </component>
    </div>
</template>

<script>
import Loading from './Loading'
import AOS from "aos";

export default {
    el: '#app',

    name: "App",

    components: {
        Loading
    },

    computed: {
        layout(){
            return this.$route.meta.layout || "default-layout"
        }
    },

    created() {
        AOS.init({
            once: true
        })
    },

    mounted () {
        this.$loading = this.$refs.loading
    }
}
</script>
