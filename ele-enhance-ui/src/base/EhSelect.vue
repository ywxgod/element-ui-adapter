<template>
    <el-select v-bind="$attrs" v-on="$listeners"
               :popper-class="popupClass">
        <el-option v-for="item in options"
            :key="item[valueField]"
            :label="item[labelField]"
            :value="item[valueField]">
            <component v-if="itemRenderer" :is="itemRenderer" :item="item" @action="onAction" />
        </el-option>
    </el-select>
</template>
<style lang="scss" scoped>
    .popup-with-itemRenderer {
        .el-select-dropdown__item {
            height: auto;
        }
    }
</style>
<script>

    export default {
        name: 'EhSelect',
        computed: {
            popupClass() {
                return (this.itemRenderer?'popup-with-itemRenderer':'') + ' ' + (this.$attrs['popper-class']||'');
            }
        },
        props: {
            labelField: {
                type: String, default: 'label'
            },
            valueField: {
                type:String, default: 'id'
            },
            options: {
                type: Array,
                default: function() { return []; }
            },
            itemRenderer: {
                type: Object,
                default: function() { return null; }
            }
        },
        methods: {
            onAction([eventType, ...rest]) {
                this.$emit(eventType, rest);
            }
        }
    }
</script>