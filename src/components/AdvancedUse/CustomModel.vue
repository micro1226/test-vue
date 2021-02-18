<template>
  <div>
    <input
      type="text"
      :value="text1"
      @input="$emit('change1', $event.target.value)"
    />
  </div>
</template>

<script>

// 1.上面的 input 使用了:value而不是 v-model
// 2.上面的 change1 和 model.event.change1 对应起来
// 3.上面的 text1 和 model.prop.text1 对应起来
export default {
  model: {
    prop: 'text1', // 对应 props.text
    event: 'change1'
  },
  props: {
    text1: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
