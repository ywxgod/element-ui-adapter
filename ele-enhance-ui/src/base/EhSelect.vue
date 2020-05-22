<template>
    <el-select v-bind="$attrs" v-on="$listeners"
               :popper-class="popupClass">
        <el-option v-for="item in items" v-if="!group"
            :key="item[valueField]"
            :label="item[labelField]"
            :value="item[valueField]">
            <component v-if="item.itemRenderer" :is="item.itemRenderer" :item="item" @action="onAction" />
        </el-option>
        <el-option-group v-if="group"
                v-for="groupItem in items"
                :key="groupItem[labelField]"
                :label="groupItem[labelField]">
            <el-option v-for="item in groupItem.options"
                    :key="item[valueField]"
                    :label="item[labelField]"
                    :value="item[valueField]">
                <component v-if="item.itemRenderer" :is="item.itemRenderer" :item="item" @action="onAction" />
            </el-option>
        </el-option-group>
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
                const hasItemRenderer = this.items.some(i => i.itemRenderer);
                return (hasItemRenderer?'popup-with-itemRenderer':'') + ' ' + (this.$attrs['popper-class']||'');
            }
        },
        data() {
            return {
                items: []
            };
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
            group: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            options: {
                deep: true,
                immediate: true,
                handler: function() {
                    this.items = this.options || [];
                }
            }
        },
        methods: {
            onAction([item, ...rest]) {
                this.$emit('action', [item, ...rest]);
            }
        }
    }
</script>