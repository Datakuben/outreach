<template>
  <div class="corpora">
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <div class="grid imageCard">
        <v-img
          class="logo"
          src="/assets/projGutenberg.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Project Gutenberg (<a href="https://www.gutenberg.org/" target="_blank">www.gutenberg.org</a>)
            </h3>
          </v-card-title>
          <v-card-text>
            <p>This corpus is....</p>
            <p>How to download....</p>
            <p>Information about....</p>
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
          src="/assets/projGutenberg.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Project Gutenberg (<a href="https://www.gutenberg.org/"
                                                            target="_blank">www.gutenberg.org</a>)</h3>
          </v-card-title>
          <v-card-text>
            <p>This corpus is....</p>
            <p>How to download....</p>
            <p>Information about....</p>
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
          src="/assets/projGutenberg.png"
        ></v-img>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Project Gutenberg (<a href="https://www.gutenberg.org/"
                                                            target="_blank">www.gutenberg.org</a>)</h3>
          </v-card-title>
          <v-card-text>
            <p>This corpus is....</p>
            <p>How to download....</p>
            <p>Information about....</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Corpora'
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
