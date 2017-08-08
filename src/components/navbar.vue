<template lang="jade">
  nav.nav
    .nav-left
      router-link(to="/").nav-item.is-tab Home
      router-link(to="/").nav-item.is-tab About
      router-link(to="/product/1").nav-item.is-tab {Test}
    .nav-center
      router-link(to="/").nav-item.is-brand Shop
    .nav-right
      router-link(to="/login")
        span.nav-item
          .button Login
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
