<template>
    <span :style="{...$attrs}">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'StyledText'
    }
</script>