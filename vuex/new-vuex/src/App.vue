<template>
  <div id="app" class="app">
    <header>
      <img alt="Vue logo" src="../src/assets/logo.png">
      <nav>
        <router-link :to="{name: 'dashboard'}" class="router-link">Dashboard</router-link>
        <router-link :to="{name: 'calculator'}" class="router-link">Calculate</router-link>
        <router-link :to="{name: 'about'}" class="router-link">About</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
      <transition name="fade">
        <ModalWindow
          v-if="showModal"
          :settings="modalSetting"
        />
      </transition>
    </main>
  </div>
</template>

<script>
// import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'App',
  components: { ModalWindow: () => import(/* webpackChunkName: "Modal" */ '@/components/ModalWindow.vue') },
  data () {
    return {
      modalSetting: {},
      showModal: false
    }
  },
  methods: {
    onShown (settings) {
      this.showModal = !this.showModal
      this.modalSetting = settings
    },
    onHide () {
      this.showModal = !this.showModal
    }
  },
  mounted () {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app {
  max-width: 400px;
  margin: 0 auto;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.router-link {
  margin: 0 5px;
  text-decoration: none;
  background-color: aquamarine;
  padding: 7px 15px;
  border: 1px solid;
  border-radius: 5px;
  color: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
