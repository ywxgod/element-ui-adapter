<template>
    <div class="ex-button-bar">
        <eh-button-bar :buttons="buttons"
                       @change="onButtonBarChange"
                       @click="onButtonClick"
                       :selectedIndex="selectedIndex" />
        <div class="text">
            <div class="row" v-for="(i, j) in infos" :key="j">{{i}}</div>
        </div>
    </div>
</template>
<script>

const buttons = [
    { label: '湖北' },
    { label: '河南' },
    { label: '江西' },
    { label: '陕西' }
];

export default {
    name: 'ButtonBar',
    data() {
        return {
            buttons,
            infos: [],
            selectedIndex: 1
        };
    },
    computed: {
        info() {
            return this.infos.join('\r\n');
        }
    },
    methods: {
        onButtonBarChange({oldv, newv}) {
            this.infos.push(`Event: change, oldv: ${JSON.stringify(oldv)}, newv: ${JSON.stringify(newv)}`);
        },
        onButtonClick(item) {
            this.infos.push(`Event: click, item: ${JSON.stringify(item)}`);
        }
    }
};
</script>
<style scoped lang="scss">
    .text {
        margin: 10px 0;
        font-size: 14px;
        font-weight: normal;

        .row {
            margin: 5px 0;
        }
    }
</style>