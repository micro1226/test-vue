<template>
  <div>
    <p>Vue 高级特性</p>
    <hr />

    <!-- v-model -->
    <!-- <p>{{name}}</p> -->
    <!-- <CustomeModel v-model="name"/> -->

    <!-- $nextTick  -->
    <!-- <NextTick /> -->

    <!-- slot-基本使用 -->
    <!-- <SlotDemo :url="website.url" >
            {{website.title}}
        </SlotDemo> -->

    <!-- slot-作用域插槽 -->
    <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlotDemo> -->

    <!-- slot-具名插槽 -->
    <!-- <NamedSlot :url="website.url">
      <template v-slot:header>
        header
      </template>
      <template> main </template>
      <template v-slot:footer>
        footer
      </template>
    </NamedSlot> -->

    <!-- 动态组件 -->
    <!-- <component :is="NextTickName" /> -->
    <!-- <div v-for="(val, key) in testData" :key="key">
      <component :is="val.type" />
    </div> -->
  </div>
</template>

<script>
// import CustomeModel from './CustomModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
// import NamedSlot from './NamedSlot'

export default {
  components: {
    // NamedSlot
    // ScopedSlotDemo
    // SlotDemo
    // NextTick,
    // SlotDemo: () => import('./ScopedSlotDemo') //异步加载
    // CustomeModel
  },
  created () {
    console.log(this.testData)
  },
  data () {
    return {
      name: 'mary',
      person: {
        name: 'mary'
      },
      website: {
        url: 'http://imooc.com',
        title: 'imooc',
        subTitle: 'muke'
      },
      NextTickName: 'NextTick',
      newsData: ['text', 'text', 'image'],
      testData: {
        1: { type: 'text' },
        2: { type: 'text' },
        3: { type: 'image' }
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
