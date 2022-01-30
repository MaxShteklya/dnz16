<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
export default {
    el: '#app',

    name: "App",

    computed: {
        layout(){
            return this.$route.meta.layout || "default-layout"
        }
    }
}
</script>
