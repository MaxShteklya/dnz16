<template>
    <div>
        <navbar/>

        <slot/>

        <footer>

        </footer>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
    name: "Default",

    components: {
        Navbar
    }
}
</script>

<style scoped>

</style>
