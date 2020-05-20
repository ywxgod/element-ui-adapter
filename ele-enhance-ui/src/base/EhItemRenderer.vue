<script>
    const EVENT = {
        ACTION: 'action'
    };

    export default {
        name: 'EhItemRenderer',
        props: {
            item: {
                type: Object,
                default: function() {
                    return {};
                }
            }
        },
        methods: {
            dispatchEvent(...rest) {
                this.$emit(EVENT.ACTION, [ EVENT.ACTION, ...rest, this.item ]);
            }
        }
    }
</script>