<template>
    <div>
        <p>Vue 高级特性</p>
        <hr>

        <p>{{name}}</p>
        <CustomeModel v-model="name"/>
    </div>
</template>

<script>
import CustomeModel from './CustomModel'
export default {
    components: {
        CustomeModel
    },
    data() {
        return {
            name: 'mary'
        }
    }
}
</script>

<style lang="less" scoped>

</style>