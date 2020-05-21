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
                this.$emit(EVENT.ACTION, [ this.item, ...rest ]);
            }
        }
    }
</script>