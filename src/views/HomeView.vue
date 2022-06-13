<template>
  <div class="home px-10">
    <Home />
  </div>
</template>

<style>

</style>

<script>
import Home from '../components/Home.vue'
export default {
  props: ['todo'],
    setup() {
    },
    components: { Home }
}
</script>