<template>
    <div class="el-button-group eh-button-bar">
        <el-button :key="i.label"
                   v-bind="i"
                   @click="onButtonClick(i)"
                   :class="[j===activeIndex ? activeCss : '']"
                   v-for="(i, j) in buttons">{{i.label}}</el-button>
    </div>
</template>
<script>
    /**
     *
     * ButtonBar组件
     *
     * @author ywxgod
     *
     * 属性说明：
     * buttons: 是一个数组，元素是el-button的属性集合，用于创建按钮。
     * selectedIndex：初始选中的索引
     *
     * 事件说明：
     * change：只有选中有改变的时候会触发此事件
     * click: 按钮被点击是触发
     *
     * */

    const EVENTS = {
        CHANGE: 'change',
        CLICK: 'click'
    };

    export default {
        name: "EhButtonBar",
        props: {
            selectedIndex: {
                type: Number,
                default: 0
            },
            buttons: {
                type: Array,
                default: function() { return []; }
            },
            activeCss: {
                type: String,
                default: 'active-btn'
            }
        },
        data() {
            return {
                activeItem: null
            };
        },
        computed: {
            activeIndex() {
                if (!this.activeItem) {
                    return 0;
                }
                let index = this.buttons.findIndex(i => i.label === this.activeItem.label);
                if (index === -1) {
                    index = 0;
                }
                return index;
            }
        },
        methods: {
            onButtonClick(item) {
                if (item.label !== this.activeItem.label) {
                    this.$emit(EVENTS.CHANGE, {oldv: this.activeItem, newv: item});
                }
                this.$emit(EVENTS.CLICK, item);
                this.activeItem = item;
            },
            getSelectedIndex() {
                return this.activeIndex;
            }
        },
        mounted() {
            if( this.buttons.length && this.selectedIndex <= this.buttons.length - 1 ) {
                this.activeItem = this.buttons[this.selectedIndex];
            }
        }
    }
</script>

<style scoped lang="scss">
.active-btn {
    border-color: blue;
    margin-right: 0px !important;
}
</style>