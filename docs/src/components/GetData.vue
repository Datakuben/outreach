<template>
  <div class="getData">
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('corpora')"
    >
      <v-card-title>
        <h3 class="headline mb-0">Get data from online corpora</h3>
      </v-card-title>
      <v-card-text>
        Short Description...
      </v-card-text>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('home')"
    >
      <v-card-title>
        <h3 class="headline mb-0">Get data with web crawlers?</h3>
      </v-card-title>
      <v-card-text>
        Short Description...
      </v-card-text>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('home')"
    >
      <v-card-title>
        <h3 class="headline mb-0">Get data through APIs?</h3>
      </v-card-title>
      <v-card-text>
        Short Description...
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'GetData'
}
</script>
