<template>
    <p>state {{name}}</p>
</template>

<script>
export default {
    data() {
        return {
            name: 'C'
        }
    },
    mounted() {
        console.log(`${this.name} mounted`);
    },
    destroyed() {
        console.log(`${this.name} destroyed`);
    }
}
</script>