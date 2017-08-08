<template lang="jade">
  .container
    navbar
    .container
      router-view
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    navbar
  }
}
</script>

<style lang="sass">
  @import "../node_modules/bulma/bulma.sass"
  
</style>
