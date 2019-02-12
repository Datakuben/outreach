<template>
  <div class="analyseWithVoyant">
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <div
        class="grid videoCard"
        :style="{gridTemplateColumns: playerWidth + 'px 1fr'}">
        <div
          id="player"
          v-html="iframe"
        ></div>
        <v-card>
          <v-card-title>
            <h3
              class="headline mb-0"
              v-html="video.title"
            ></h3>
          </v-card-title>
          <v-card-text>
            <p v-html="video.info"></p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
    <v-card>
      <v-card-title>Voyant Tools Videos</v-card-title>
      <v-card-text>
        <v-list three-line>
          <template v-for="(item, index) in videos">
            <v-subheader
              v-if="!item.info"
              :key="index"
            >
              {{ item.title }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click="openVideo(index)"
            >
              <v-list-tile-avatar>
                <v-icon>play_arrow</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.info"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AnalyseWithVoyant',
  data () {
    return {
      windowWidth: 0,
      currentVideo: 0,
      videos: [
        {
          id: '9tERV98VUT4',
          title: 'Install local Voyant server (Windows)',
          info: 'How to install the local Voyant server on Windows 10'
        },
        {
          id: '4urg_apOoJY',
          title: 'Install local Voyant server (OS X)',
          info: 'This video explains how to install a local Voyant server on a Mac.'
        },
        {
          id: 'v3shqQra0Y8',
          title: 'How to get started with Voyant tools',
          info: 'This tutorial is about the basic first steps in Voyant with a local Voyant server.'
        },
        {
          id: 'M7UgSJmWHKM',
          title: 'Voyant tools 01 - Cirrus',
          info: 'Cirrus is a word cloud displaying the frequency of words appearing in a corpus. Words occurring more frequently appear larger.'
        },
        {
          id: 'FWwM3lxAH9Y',
          title: 'Voyant tools 02 - Corpus Terms',
          info: 'Corpus Terms is a table view of term frequencies in the entire corpus.'
        },
        {
          id: 'hQDwfRz9RcM',
          title: 'Voyant tools 03 - Links',
          info: 'Introduction to the Voyant tools links widget'
        },
        {
          id: 'Gw0zq8m4aaA',
          title: 'Voyant tools 04 - Reader',
          info: 'The Reader tool provides a way of reading documents in the corpus, text is fetched as needed.'
        },
        {
          id: 'KFy463Enrc4',
          title: 'Voyant tools 05 - TermsBerry',
          info: 'The TermsBerry tool provides a way of exploring high frequency terms and their collocates (words that occur in proximity).'
        },
        {
          id: 'cIc3N7JMPbo',
          title: 'Voyant tools 06 - Trends',
          info: 'Trends tool, a line graph that shows term distributions.'
        },
        {
          id: 'Xe01bARIniM',
          title: 'Voyant tools 07 - DocumentTerms',
          info: 'Document Terms is a table view of term frequencies for each document.'
        },
        {
          id: 'yAI5BNix0Eo',
          title: 'Voyant tools 08 - Summary',
          info: 'The Summary provides a simple, textual overview of the current corpus, including (as applicable for multiple documents) number of words, number of unique words, longest and shortest documents, highest and lowest vocabulary density, average number of words per sentence, most frequent words, notable peaks in frequency, and distinctive words.'
        },
        {
          id: 'u4cyhRvEpJM',
          title: 'Voyant tools 09 - Documents',
          info: 'The Documents tool shows a table of the documents in the corpus and includes functionality for modifying the corpus.'
        },
        {
          id: 'jbmZu_t_i0w',
          title: 'Voyant tools 10 - Phrases',
          info: 'The Phrases tool shows repeating sequences of words organized by frequency of repetition or number of words in each repeated phrase.'
        },
        {
          id: 'bzH2uSHyxj8',
          title: 'Voyant tools 11 - Contexts',
          info: 'The Contexts (or Keywords in Context) tool shows each occurrence of a keyword with a bit of surrounding text (the context). It can be useful for studying more closely how terms are used in different contexts.'
        },
        {
          id: 'BW3PbM4VyrQ',
          title: 'Voyant tools 12 - Correlations',
          info: 'The Correlations tool enables an exploration of the extent to which term frequencies vary in sync (terms whose frequencies rise and fall together or inversely).'
        }
      ]
    }
  },
  computed: {
    playerWidth () {
      return window.innerWidth / 2
    },
    playerHeight () {
      return this.playerWidth * (9 / 16)
    },
    video () {
      return this.videos[this.currentVideo]
    },
    iframe () {
      return `<iframe
                  width="${this.playerWidth}"
                  height="${this.playerHeight}"
                  src="https://www.youtube.com/embed/${this.videos[this.currentVideo].id}"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>`
    }
  },
  methods: {
    openVideo (index) {
      this.currentVideo = index
      document.getElementById('player').scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
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
  .videoCard {
    grid-template-columns: 560px 1fr;
    grid-column-gap: 0;
  }
</style>
