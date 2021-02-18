<template>
  <div>
    <todo-input @add="addHandler"></todo-input>
    <todo-list :todoList="todoList" @delete="deleteHandler"></todo-list>
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default {
  components: { TodoInput, TodoList },
  name: 'todo',
  data () {
    return {
      todoList: [
        {
          id: 'id-1',
          title: 'breakfast'
        },
        {
          id: 'id-2',
          title: 'lunch'
        },
        {
          id: 'id-3',
          title: 'dinner'
        }
      ],
      current: 'index'
    }
  },
  beforeCreate () {
    console.log(`${this.current}-index beforeCreate`)
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
    addHandler (text) {
      console.log('onAdd' + text)
      this.todoList.push({
        id: `id-${Date.now()}`,
        title: text
      })
      console.log(this.todoList)
    },
    deleteHandler (id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    }
  }
}
</script>

<style lang="less" scoped></style>TodoList
