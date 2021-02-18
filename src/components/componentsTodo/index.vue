<template>
  <div>
    <Input @add="addHandler" />
    <List :list="list" @delete="deleteHandler" />
  </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
  components: { Input, List },
  data () {
    return {
      list: [
        { id: 'id-1', title: ' 标题 1' },
        { id: 'id-2', title: ' 标题 2' },
        { id: 'id-3', title: ' 标题 3' },
        { id: 'id-4', title: ' 标题 4' }
      ]
    }
  },
  created() {
      console.log('index created');
  },
  mounted() {
      console.log('index mounted');
  },
  methods: {
    addHandler (title) {
      this.list.push({
        id: `id-${Date.now()}`,
        title: title
      })
    },
    deleteHandler (id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  }
}
</script>
