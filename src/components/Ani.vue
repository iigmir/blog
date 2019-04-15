<template>
    <button class="btn-1">
        <span>Hover Me</span>
    </button>
</template>

<style lang="scss" scoped>
button
{
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    position: relative;
    &::before, 
    &::after
    {
        content:"";
        width: 0;
        height: 2px;
        position: absolute;
        transition: all 0.2s linear;
        background: violet;
    }
    &:hover::before,
    &:hover::after
    {
        width: 100%;
    }
    span
    {
        display: block;
        padding: 25px 80px;
        &::before, 
        &::after
        {
            content:"";
            width:2px;
            height:0;
            position: absolute;
            transition: all 0.2s linear;
            background: blue;
        }

        &::before
        {
            transition-delay: 0s;
            left: 0;
            top: 0;
        }
        &::after
        {
            right: 0;
            bottom: 0;
            transition-delay: 0s;
        }
    }
    &:hover span
    {
        &::before,
        &::after
        {
            height: 100%;
            transition-delay: 0s;
        }
    }

    &::before
    {
        transition-delay: 0.2s;
        right: 0;
    }
    &::after
    {
        left: 0;
        transition-delay: 0.2s;
    }
}
</style>
