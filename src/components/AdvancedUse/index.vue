<template>
    <div>
        <p>Vue 高级特性</p>
        <hr>

        <!-- <p>{{name}}</p> -->
        <!-- <CustomeModel v-model="name"/> -->
        <!-- <NextTick /> -->
        <!-- <SlotDemo :url="website.url" >
            {{website.title}}
        </SlotDemo> -->

        <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlotDemo> -->

        <NamedSlot :url="website.url">
            <!-- 缩写<template #header> -->
            <template v-slot:header>
                header
            </template>
            <!-- <template #header>
                header
            </template> -->
            <template >
                main
            </template>
            <template v-slot:footer>
                footer
            </template>
        </NamedSlot>
    </div>
</template>

<script>
// import CustomeModel from './CustomModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
import NamedSlot from './NamedSlot'

export default {
    components: {
        NamedSlot
        // ScopedSlotDemo
        // SlotDemo
        // NextTick
        // CustomeModel
        
    },
    data() {
        return {
            name: 'mary',
            person: {
                name: 'mary'
            },
            website: {
                url: 'http://imooc.com',
                title: 'imooc',
                subTitle: 'muke'
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>