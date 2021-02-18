<template>
  <div>
    <p>Vue 高级特性</p>
    <hr />

    <!-- <p>{{name}}</p> -->
    <!-- <CustomeModel v-model="name"/> -->
    <NextTick />
    <component :is="NextTickName" />
    <!-- <SlotDemo :url="website.url" >
            {{website.title}}
        </SlotDemo> -->

    <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlotDemo> -->

    <!-- <NamedSlot :url="website.url">
      <template v-slot:header>
        header
      </template>
      <template> main </template>
      <template v-slot:footer>
        footer
      </template>
    </NamedSlot> -->

    <div v-for="(val, key) in testData" :key="key">
      <component :is="val.type" />
    </div>
  </div>
</template>

<script>
// import CustomeModel from './CustomModel'
import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
// import NamedSlot from './NamedSlot'

export default {
  components: {
    // NamedSlot
    // ScopedSlotDemo
    // SlotDemo
    NextTick,
    // ScopedSlotDemo: () => {
    //     return import('./ScopedSlotDemo')
    // },
    // ScopedSlotDemo: () => import('./ScopedSlotDemo')
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
