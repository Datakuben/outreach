<template>
  <v-app id="inspire">
    <v-content>
      layout
      <router-view></router-view>
    </v-content>
</template>

<script>
  export default {
    data: () => ({
      dialog: false
    }),
    props: {
      source: String
    },
    components: {
    }
  }
</script>
