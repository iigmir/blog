<template>
    <div class="is-navbar-container">
        <div class="is-brand">
            <h1 class="is-logo">
                <router-link to="/">露比的銳思</router-link>
            </h1>
        </div>
        <div class="is-navbar">
            <nav>
                <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/tags">Tags</router-link></li>
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

.is-brand h1
{
    font-size: 1.8rem;
    a
    {
        color: black;
        &:hover { color: #ee2455; }
    }
}
</style>
