<template>
    <div>
        <div v-if="item.id === 1">
            <el-button @click="(e) => {onButtonClick(e, 'action1')}">定义动作1</el-button>
            <el-button @click="(e) => {onButtonClick(e, 'action2')}">自定义动作2</el-button>
            <div>{{item.name}}</div>
        </div>
        <div v-else-if="item.id === 2">Hello, en-ui</div>
        <div v-else @click.stop="stopEvt"><el-slider v-model="item.age"></el-slider></div>
    </div>
</template>

<script>

    import enui from 'ele-enhance-ui';

    const { EhItemRenderer } = enui;

    export default {
        name: 'EhComboBoxItemRendererSample',
        extends: EhItemRenderer,
        methods: {
            onButtonClick(e, action) {
                e.stopPropagation();
                this.dispatchEvent(e, action)
            },
            stopEvt(e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>