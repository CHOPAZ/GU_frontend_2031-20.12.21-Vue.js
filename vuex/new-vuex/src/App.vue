<template>
  <div id="app">
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
    </main>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
