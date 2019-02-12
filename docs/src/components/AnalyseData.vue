<template>
  <div class="analyseData">
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('/analyse/voyant')"
    >
      <div class="grid imageCard">
        <v-img
          class="logo"
          src="/assets/voyant.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Analyse data with Voyant</h3>
          </v-card-title>
          <v-card-text>
            <p>Step-by-step video tutorials on data analysis with Voyant tools. Topics cover installation and a quick
              survey of the most prominent Voyant tools</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('/analyse/jupyter')"
    >
      <div class="grid imageCard">
        <v-img
          class="logo"
          src="/assets/jupyter.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Analyse data with Jupyter notebooks</h3>
          </v-card-title>
          <v-card-text>
            <p>Info....</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AnalyseData'
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
