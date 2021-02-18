<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="addTitle">Add</button>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      title: ''
    }
  },
  created() {
      console.log('input created');
  },
  mounted() {
      console.log('input mounted');
  },
  methods: {
    addTitle () {
      console.log('addTitle', this.text)
      this.$emit('add', this.title)
    //   event.$emit('onAddTitle',this.title)
      this.title = ''
    }
  }
}
</script>

<style lang="less" scoped></style>
