<template>
  <div class="analyseWithJupyter">
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('/danishCorpus')"
    >
      <div class="grid imageCard">
        <v-img
          class="logo"
          src="/assets/jupyter.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Topic analysis with danish corpus</h3>
          </v-card-title>
          <v-card-text>
            <p>info...</p>
            <p>Step by step tutorial</p>
            <p>Useful information</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <div class="grid imageCard">
        <v-img
          class="logo"
          src="/assets/jupyter.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Sentiment analysis?</h3>
          </v-card-title>
          <v-card-text>
            <p>About...</p>
            <p>Step by step tutorial</p>
            <p>Useful information</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('/stopwords')"
    >
      <div class="grid imageCard">
        <v-img
          class="logo"
          src="/assets/jupyter.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Adding stop words in jupyter notebooks</h3>
          </v-card-title>
          <v-card-text>
            <p>About...</p>
            <p>Step by step tutorial</p>
            <p>Useful information</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AnalyseWithJupyter'
}
</script>

<style scoped>
  .gridKids > *,
  .grid {
    display: grid;
    grid-column-gap: 2em;
    grid-row-gap: 1em;
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  }

  .imageCard {
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 0;
  }
</style>
