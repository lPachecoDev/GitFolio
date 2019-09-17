<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          GitFolio
        </q-toolbar-title>

        <div>Lucas Pacheco Rodrigues</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition
      name="routerTransition"
      mode="out-in"
      appear
      enter-active-class="animated slideInUp"
      leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>

    <q-footer class="row">
      <div class="col-sm-4 col-md-2 offset-md-3">
        <router-link to="/">
          <q-img
            v-if="isHome()"
            src="statics/footer/Home_Pressed.png"
          />
          <q-img
            v-else
            src="statics/footer/Home.png"
          />
        </router-link>
      </div>
      <div class="col-sm-4 col-md-2 offset-md-3">
        <router-link to="/curriculum">
          <q-img
            v-if="isCV()"
            src="statics/footer/Curriculum_Pressed.png"
          />
          <q-img
            v-else
            src="statics/footer/Curriculum.png"
          />
        </router-link>
      </div>
      <div class="col-sm-4 col-md-2 offset-md-3">
        <router-link to="/contact">
          <q-img
            v-if="isContact()"
            src="statics/footer/Contact_Pressed.png"
          />
          <q-img
            v-else
            src="statics/footer/Contact.png"
          />
        </router-link>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
let bgLogo = ''

export default {
  data () {
    return {
      bgLogo
    }
  },
  methods: {
    isHome () {
      return this.$router.history.current['path'] === '/'
    },
    isCV () {
      return this.$router.history.current['path'] === '/curriculum'
    },
    isContact () {
      return this.$router.history.current['path'] === '/contact'
    }
  }
}
</script>

<style>
</style>
