<template>
  <div>
    <input v-model="inputText" />
    <button @click="onAdd">Add</button>
  </div>
</template>

<script>
import event from './event'

export default {
  name: 'todoInput',
  props: {
    msg: String
  },
  data () {
    return {
      inputText: '',
      current: 'input'
    }
  },
  beforeCreate () {
    console.log(`${this.current}-input beforeCreate`)
  },
  created () {
    console.log(`${this.current} created`)
  },
  beforeMount () {
    console.log(`${this.current} beforeMount`)
  },
  mounted () {
    console.log(`${this.current} mounted`)
  },
  beforeUpdate () {
    console.log(`${this.current} beforeUpdate`)
  },
  updated () {
    console.log(`${this.current} updated`)
  },
  beforeDestroy () {
    console.log(`${this.current} beforeDestroy`)
  },
  destroyed () {
    console.log(`${this.current} destroyed`)
  },
  methods: {
    onAdd () {
      console.log(this.inputText)
      this.$emit('add', this.inputText)
    //   触发自定义事件
      event.$emit('onAddTitle', this.inputText)
      this.inputText = ''
    }
  }
}
</script>

<style lang="less" scoped></style>
