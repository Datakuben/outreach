<template>
  <div id="app">
    <v-toolbar id=navigation>
      <v-toolbar-title @click="$router.push('/')">DATAKUBEN</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="$router.push('/getData')">Get Data</v-btn>
        <v-btn flat @click="$router.push('/prepareData')">Prepare Data</v-btn>
        <v-btn flat @click="$router.push('/analyse')">Analyse Data</v-btn>
        <v-btn flat @click="$router.push('/about')">About</v-btn>
        <v-btn flat @click="$router.push('/contact')">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <transition name="slide-fade">
      <v-banner/>
    </transition>
    <v-container
      fluid
      fill-height
    >
      <v-layout>
        <v-flex xs8 offset-xs2>
          <div
            id="pageContent"
            class="gridKids"
          >
            <transition name="slide-fade" mode="out-in">
              <router-view class=".gridKids"/>
            </transition>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import vBanner from './components/Banner'
export default {
  name: 'App',
  components: {
    vBanner
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.gridKids > *,
.grid {
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 1em;
  grid-template-rows: repeat(auto-fit, 1fr);
}
p {
  font-size: 130%;
}

/* router-view transitions */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
