<template>
  <div id="app">
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addItem">Add Item</button>
    <button @click="minusItem">Minus Item</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem () {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)

      // 1.异步渲染,$nextTick待 dom 渲染完成后再回调
      // 2.页面渲染时会将data的修改做整合,多次 data 修改只会渲染一次
      this.$nextTick(() => {
        const ele = this.$refs.ul1
        console.log('add ' + ele.childNodes.length)
      })
    },
    minusItem () {
      this.list.pop()

      this.$nextTick(() => {
        const ele = this.$refs.ul1
        console.log('minus ' + ele.childNodes.length)
      })
    }
  }
}
</script>
