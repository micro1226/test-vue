<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
      return {

      }
  },
  created() {
      console.log('list created');
  },
  mounted() {
      console.log('list mounted');
  },
  methods: {
      deleteItem(id) {
          this.$emit('delete', id)
      },
      addTitleHandler(title) {
          console.log('addTitleHandler', title);
      }
  }
}
</script>

<style lang="less" scoped></style>
