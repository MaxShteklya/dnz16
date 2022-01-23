<template>
    <div>
        <h1>Admin</h1>
        <section className="content">

            <slot/>

        </section>
        <footer>

        </footer>
    </div>
</template>

<script>
export default {
    name: "Admin"
}
</script>

<style scoped>
header {
    background-color: green;
    height: 70px;
    display: flex;
    align-items: center;
}

footer {
    background-color: green;
    height: 70px;
}

.content {
    min-height: calc(100vh - 140px);
}

ul {
    list-style: none;
    margin: 0;
    color: white;
}

li {
    color: white;
    display: inline;
    margin: 0 5px;
}

.link {
    color: white;
    text-decoration: none;
}

</style>
