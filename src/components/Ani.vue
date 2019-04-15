<template>
    <button class="btn-1">
        <span>Hover Me</span>
    </button>
</template>

<style lang="scss" scoped>
button
{
    // display: inline-block;
    // background: none;
    // border: none;
    // font-size: 18px;
    // margin: 20px 30px;
    // background: rgba(0,0,0,0.09);
    color: red;
    cursor: pointer;
    position: relative;
    background-color: sliver;
    &::before, 
    &::after
    {
        content:"";
        width: 0;
        height: 2px;
        position: absolute;
        transition: all 0.2s linear;
        background: red;
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
    }
    &:hover span::before,
    &:hover span::after
    {
        height: 100%;
    }
}

.btn-1
{
    &::before
    {
        transition-delay: 0.2s;
        right: 0;
        // top: 0;
    }
    &::after
    {
        left: 0;
        // bottom: 0;
        transition-delay: 0.2s;
    }
    &:hover::before,
    &:hover::after
    {
        transition-delay: 0s;
    }
    &:hover span::before,
    &:hover span::after
    {
        transition-delay: 0.2s;
    }
    span
    {
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
}
</style>
