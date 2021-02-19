export default {
    data() {
        return {
            city: 'shanghai'
        }
    },
    methods: {
        showName() {
            console.log(this.name);
        }
    },
    mounted() {
        console.log('mix in mounted', this.name);
    }
}