<template>
    <div>
        <header>
            <ul class="nav">
                <li><router-link class="link" to="/">Домашняя страница</router-link></li>
                <li><router-link class="link" to="/page1">Страница 1</router-link></li>
                <li><router-link class="link" to="/page2">Страница 2</router-link></li>
                <li><router-link class="link" to="/page3">Страница 3</router-link></li>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
