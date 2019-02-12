<template>
  <div class="stopWords">
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <v-card-title>
        <h3 class="headline mb-0">How to add a list of stopwords to Jupyter Notebooks</h3>
      </v-card-title>
      <v-card-text>
        <div class="grid textfieldInput">
          <v-text-field
            v-model="newword"
            label="Include another stopword"
          ></v-text-field>
          <v-btn
            color="grey"
            small
            @click="addStopWord"
          >Add
          </v-btn>
        </div>
        <div class="text-xs-center">
          <code>stopwords = [<transition-group
              name="staggered-fade"
              tag="span"
              v-bind:css="false"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:leave="leave"
            >
              <template
                v-for="(item, index) in stopwords"
                close
              ><span
                :key="item.text"
                :data-index="index"
                :class="{'highlight': index === highlightedIndex}"
                @click="removeStopWord(index)">"{{ item.text }}"</span><span
                :key="','+item.text"
                :data-index="index"
                v-if="index < stopwords.length - 1">, </span></template>
            </transition-group>];</code>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import stopWords from '@/assets/stopwords'
import Velocity from 'velocity-animate'
export default {
  name: 'StopWords',
  data () {
    return {
      stopwords: stopWords,
      newword: ''
    }
  },
  computed: {
    highlightedIndex () {
      let vm = this
      return this.stopwords.findIndex(word => word.text === vm.newword)
    }
  },
  methods: {
    addStopWord () {
      let vm = this
      const index = this.stopwords.findIndex(word => word.text === vm.newword)
      if (index < 0) {
        this.stopwords.push({
          text: this.newword
        })
      }
    },
    removeStopWord (index) {
      this.page.stopWords.splice(index, 1)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      const delay = 150
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 1, height: '1.6em'},
          {complete: done}
        )
      }, delay)
    },
    leave: function (el, done) {
      const delay = 150
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 0, height: 0},
          {complete: done}
        )
      }, delay)
    }
  }
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
  .highlight {
    background-color: #0d47a1;
    color: white;
  }
</style>
