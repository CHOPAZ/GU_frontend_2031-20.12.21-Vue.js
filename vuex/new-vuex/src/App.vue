<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <v-btn :to="{name: 'dashboard'}"
        plain>Dashboard</v-btn>
      <v-btn :to="{name: 'calculator'}"
        plain>Calculate</v-btn>
      <v-btn :to="{name: 'about'}"
        plain>About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style lang="scss">
button {
  background-color: #009688;
  padding: 7px 15px;
  border-width: 1px;
  border-radius: 5px;
  text-align: right;
  cursor: pointer;
}
</style>
