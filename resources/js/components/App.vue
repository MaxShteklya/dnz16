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

export default {
    el: '#app',

    name: "App",

    computed: {
        layout(){
            return this.$route.meta.layout || "default-layout"
        }
    },

    mounted () {
        this.$loading = this.$refs.loading
    },

    components: {
        Loading
    }
}
</script>
