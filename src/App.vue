<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<template>
  <h1>The APP template</h1>
  <RouterLink to="/">{{ $t('hello') }}</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <RouterView></RouterView>
</template>
