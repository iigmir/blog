<template>
    <div class="is-navbar-container">
        <div class="is-brand">
            <b class="is-logo">Blog</b>
        </div>
        <div class="is-navbar">
            <nav>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><a href="#">...</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.is-navbar-container
{
    margin: 1.2rem;
}
</style>
