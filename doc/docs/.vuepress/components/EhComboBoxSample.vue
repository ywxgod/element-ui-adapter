<template>
    <div>
        <eh-combo-box
                labelField="name"
                @action="onAction" @change="onChange"
                :options="options1" v-model="userId1">
        </eh-combo-box>
        <eh-combo-box
                labelField="userName"
                valueField="userId"
                @change="onChange"
                :options="options2" v-model="userId2">
        </eh-combo-box>
    </div>
</template>

<script>
    import EhComboBoxItemRendererSample from "./EhComboBoxItemRendererSample";

    export default {
        name: 'EhComboBoxSample',
        data() {
            return {
                options1: [
                    { id: 1, name: '宋江', age: 43, itemRenderer: EhComboBoxItemRendererSample },
                    { id: 2, name: '吴用', age: 40, itemRenderer: EhComboBoxItemRendererSample },
                    { id: 3, name: '卢俊义', age: 34, itemRenderer: EhComboBoxItemRendererSample },
                    { id: 4, name: '武松', age: 30, itemRenderer: EhComboBoxItemRendererSample }
                ],
                options2: [
                    { userId: 1, userName: '风清扬' },
                    { userId: 2, userName: '镇远和尚' },
                    { userId: 3, userName: '任我行' },
                    { userId: 4, userName: '东方不败' }
                ],
                userId1: 1,
                userId2: 3
            }
        },
        methods: {
            onAction([evt, action, item]) {
                // 请打开控制查看具体事件参数
                console.log(evt, action, item);
            },
            onChange(value) {
                console.log(value);
            }
        }
    }
</script>