<template>
    <div>
        <eh-select
                labelField="name"
                @action="onAction" @change="onChange"
                :options="options1" v-model="userId1">
        </eh-select>
        <eh-select
                labelField="userName"
                valueField="userId"
                @change="onChange"
                :options="options2" v-model="userId2">
        </eh-select>
    </div>
</template>

<script>
    import EhSelectItemRendererSample from "./EhSelectItemRendererSample";

    import enui from 'ele-enhance-ui';
    const { EhSelect } = enui;

    export default {
        name: 'EhSelectSample',
        components: { EhSelect },
        data() {
            return {
                options1: [
                    { id: 1, name: '宋江', age: 43, itemRenderer: EhSelectItemRendererSample },
                    { id: 2, name: '吴用', age: 40, itemRenderer: EhSelectItemRendererSample },
                    { id: 3, name: '卢俊义', age: 34, itemRenderer: EhSelectItemRendererSample },
                    { id: 4, name: '武松', age: 30, itemRenderer: EhSelectItemRendererSample }
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
            onAction([item, ...rest]) {
                // 请打开控制查看具体事件参数
                console.log(item, rest);
            },
            onChange(value) {
                console.log(value);
            }
        }
    }
</script>