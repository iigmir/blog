<template>
    <nav class="is-navbar">
        <ul>
            <li><router-link to="/">露比的銳思</router-link></li>
            <li><router-link to="/tags">標籤</router-link></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.is-navbar
{
    padding: 1.2rem;
    background-color: #111;
    a
    {
        color: #EEE;
        &:hover { color: #ee2455; }
    }
}
</style>
