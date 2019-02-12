<template>
  <div class="banner">
    <transition name="fade" mode="out-in">
      <v-img
        :src="src"
        :key="src"
        height="20em"
      >
        <v-container
          fluid
          fill-height
        >
          <v-layout>
            <v-flex xs4 offset-xs4>
              <v-card
                id=intro
                elevation-2
                grey
                lighten-5
              >
                <v-card-title primary-title>
                  <div class="headline">{{ title }}</div>
                  <p>{{ body }}</p>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  computed: {
    title: { // pulls out banner from currentRoute component props
      get() {
        let value = '<router prop banner.title> is empty'
        const route = this.$store.state.router.currentRoute
        let banner = route.matched[0] && route.matched[0].props.default.banner
        if (banner) {
          banner = route.matched[0] && route.matched[0].props.default.banner
        }
        const hasValue = banner && banner.title
        if (hasValue) {
          value = banner.title
        }
        return value
      }
    },
    body: {
      get() {
        let value = '<router prop banner.body> is empty'
        const route = this.$store.state.router.currentRoute
        let banner = route.matched[0] && route.matched[0].props.default.banner
        if (banner) {
          banner = route.matched[0] && route.matched[0].props.default.banner
        }
        const hasValue = banner && banner.body
        if (hasValue) {
          value = banner.body
        }
        return value
      }
    },
    src: {
      get() {
        let value = '/assets/default.jpg'
        const route = this.$store.state.router.currentRoute
        let banner = route.matched[0] && route.matched[0].props.default.banner
        if (banner) {
          banner = route.matched[0] && route.matched[0].props.default.banner
        }
        const hasValue = banner && banner.src
        if (hasValue) {
          value = banner.src
        }
        return value
      }
    }
  }
}
</script>

<style scoped>
  #intro {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #intro > * {
    font-size: 130%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly ;
  }
  .v-card > * {
    height: 100%;
  }

  /* img src transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-to
  {
    opacity: 0.2
  }

</style>
