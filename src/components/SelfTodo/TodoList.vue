<template>
  <div>
    <div v-for="item in todoList" :key="item.id">
      {{ item.title }}
      <button @click="onDelete(item.id)">delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'todoList',
  props: {
    todoList: Array
  },
  data() {
      return {
          current: 'list'
      }
  },
  beforeCreate () {
    console.log(`${this.current}-list beforeCreate`)
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
      onDelete(id) {
          this.$emit('delete', id)
      },
      addTitleHandler(title){
          console.log('addTitleHandler', title);
      }
  }
}
</script>

<style lang="less" scoped></style>
