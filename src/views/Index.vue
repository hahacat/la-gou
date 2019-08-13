<template>
  <section class="index">
    <router-view/>
    <Foot />
  </section>
</template>

<script>
import Foot from '@/components/Footer.vue'
export default {
  name: 'index',
  components: {
    Foot
  }
}
</script>

<style lang="scss" scoped>

</style>
