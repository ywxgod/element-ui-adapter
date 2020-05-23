<template>
    <div>
        <eh-remote-select
                clearable
                :url="url"
                labelField="name"
                v-model="value"
                paramsName="postId"
                :search="true">

        </eh-remote-select>
    </div>
</template>

<script>
    export default {
        name: 'EhRemoteSelectSample',
        data() {
            return {
                url: 'https://jsonplaceholder.typicode.com/comments',
                value: ''
            };
        }
    }
</script>