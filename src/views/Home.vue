<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import HelloWorld from '@/components/HelloWorld.vue'
import { store } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    useHead({
      title: 'Default title',
      meta: [
        {
          name: 'description',
          content: 'This is a DEFAULT description',
        },
        {
          name: 'other-stuff',
          content: 'This is some OTHER stuff',
        },
      ],
    })

    const addTwo = () => store.commit('add', 2)
    const count = computed(() => store.state.count)

    return {
      addTwo,
      count,
    }
  },
})
</script>

<template>
  <h1>The HOME template -{{ count }}-</h1>
  <img alt="Vue logo" src="@/assets/logo.png" @click="addTwo" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
