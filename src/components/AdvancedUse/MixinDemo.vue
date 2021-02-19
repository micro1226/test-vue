<template>
    <div>
        <p>{{name}} {{major}} {{city}}</p>
        <button @click="showName">show name</button>
    </div>
</template>

<script>
import MyMixin from './mixin'

export default {
    mixins: [MyMixin],
    data() {
        return {
            name: 'vue',
            major: 'javascript'
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>