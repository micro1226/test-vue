<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <!-- <KeepAliveStateA v-if="state === 'A'"/>
        <KeepAliveStateB v-if="state === 'B'"/>
        <KeepAliveStateC v-if="state === 'C'"/> -->

    <!-- <KeepAliveStateA v-show="state === 'A'"/>
        <KeepAliveStateB v-show="state === 'B'"/>
        <KeepAliveStateC v-show="state === 'C'"/> -->

    <keep-alive>
      <KeepAliveStateA v-if="state === 'A'" />
      <KeepAliveStateB v-if="state === 'B'" />
      <KeepAliveStateC v-if="state === 'C'" />
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveStateA from './KeepAliveStateA'
import KeepAliveStateB from './KeepAliveStateB'
import KeepAliveStateC from './KeepAliveStateC'
export default {
  components: {
    KeepAliveStateA,
    KeepAliveStateB,
    KeepAliveStateC
  },
  data () {
    return {
      state: 'A'
    }
  },
  methods: {
    changeState (val) {
      this.state = val
    }
  }
}
</script>
