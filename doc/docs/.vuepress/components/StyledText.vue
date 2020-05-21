<template>
    <span :style="{...$attrs}" class="t">
        <slot></slot>
    </span>
</template>
<style lang="scss" scoped>
    .t {
        white-space: nowrap;
    }
</style>
<script>
    export default {
        name: 'StyledText'
    }
</script>