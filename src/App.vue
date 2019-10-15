<template>
  <main id="app" class="app">
    <div class="wrapper">
      <Main />
    </div>
    <Projects />
  </main>
</template>

<script>
import Main from './components/main.vue'
import Projects from './components/projects.vue'

export default {
  name: 'app',
  components: {
    Main,
    Projects
  }
}
</script>

<style lang="sass">
.app
  min-height: 100%
  min-width: 360px
  display: flex
  flex-direction: column
  align-items: center

.wrapper
  height: 600px
  width: 100%
  background-color: #F3F3F3
  display: flex
  flex-direction: row
  justify-content: center
  +tablet
    height: 503px
  +mobile
    height: 548px
</style>
