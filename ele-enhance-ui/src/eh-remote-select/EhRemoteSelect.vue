<script>
    import EhSelect from "../base/EhSelect";
    import axios from 'axios';

    export default {
        name: 'EhRemoteSelect',
        extends: EhSelect,
        props: {
            url: {
                type: String,
                required: true,
                default: ''
            },
            search: {
                type: Boolean,
                default: false
            },
            paramsName: {
                type: String,
                default: 'query'
            }
        },
        methods: {
            getData(query = '') {
                if (!this.url) { return; }
                axios.create()
                    .get(this.url, this.getParams(query))
                    .then(res => {
                        this.items = this.parseData(res);
                    })
                    .finally(err => {
                        if (err) {
                            console.log(err);
                        }
                    })
            },
            // 解析数据，子类可以覆盖进行修改。
            parseData(res) {
                return res.data || [];
            },
            // 生成查询参数，子类可以覆盖进行修改。
            getParams(query) {
                return { params: { [this.paramsName]: query } }
            },
            initSearch() {
                console.log(this.$attrs);
                if (this.search) {
                    this.$attrs.filterable = true;
                    this.$attrs.remote = true;
                    this.$attrs.remoteMethod = this.getData;
                }
            }
        },
        // this.$attrs每次渲染后会被重置，所以需要重新设置
        beforeUpdate() {
            this.initSearch();
        },
        beforeMount() {
            this.initSearch();
        },
        mounted() {
            if (this.url && !this.search) {
                this.getData();
            }
        }
    }
</script>