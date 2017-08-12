<template lang="jade">
  nav.nav
    .nav-left
      router-link(to="/").nav-item.is-tab Home
      router-link(to="/").nav-item.is-tab About
      router-link(to="/").nav-item.is-tab Contact
    .nav-center
      router-link(to="/").nav-item.is-brand Shop
    .nav-right
      router-link(to="/login")
        span.nav-item
          .button Login
      a(@click="logout" v-if="$store.state.user.authUser")
        span.nav-item
          .button Logout
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {

    }
  },
  methods:{
    logout(){
      this.$store.dispatch("logout");
    }
  }
}
</script>

<style scoped>

</style>
