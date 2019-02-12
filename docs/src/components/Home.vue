<template>
  <div class="home">
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('/getData')"
    >
      <v-card-title>
        <h3 class="headline mb-0">Collect Data...</h3>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-tile
            avatar
            @click="$router.push('/corpora')"
          >
            <v-list-tile-avatar>
              <v-icon>ondemand_video</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                ...from online Corpora
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            avatar
            @click="$router.push('/')"
          >
            <v-list-tile-avatar>
              <v-icon>web</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                ...with web crawlers?
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            avatar
            @click="$router.push('/')"
          >
            <v-list-tile-avatar>
              <v-icon>code</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                ...from APIs?
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <v-card-title>
        <h3 class="headline mb-0">Prepare Data</h3>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-tile
            avatar
            @click="$router.push('/formatData')"
          >
            <v-list-tile-avatar>
              <v-icon>format_shapes</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                Format options
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            avatar
            @click="$router.push('/')"
          >
            <v-list-tile-avatar>
              <v-icon>filter_list</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                Filtering
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            avatar
            @click="$router.push('/')"
          >
            <v-list-tile-avatar>
              <v-icon>format_paint</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                Tools
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card
      elevation-4
      color="grey lighten-4"
      @click="$router.push('/analyse')"
    >
      <v-card-title>
        <h3 class="headline mb-0">Analyse</h3>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-tile
            avatar
            @click="$router.push('/analyse/jupyter')"
          >
            <v-list-tile-avatar>
              <img src="/assets/jupyter.png" alt="">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                Jupyter notebooks
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            avatar
            @click="$router.push('/analyse/voyant')"
          >
            <v-list-tile-avatar>
              <img src="/assets/voyant.png" alt="">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                Voyant tools tutorials
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .home {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .home > * {
    min-width: 20em;
    min-height: 20em;
  }
</style>
