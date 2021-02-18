<template>
    <div>
        <input type="text"/>
    </div>
</template>

<script>

export default {
    model: {
        prop: 'text', // 对应 props.text
        event: 'change'
    },
    props:{
        text: {
            type: String,
            default() {
                return ''
            }
        }
    }
    
}
</script>

<style lang="less" scoped>

</style>