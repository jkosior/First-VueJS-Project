<template>
  <div id="app">
      <v-app>
          <page-header />
          <main>
              <v-container fluid>
                  <router-view></router-view>
              </v-container>
          </main>
      </v-app>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable indent */
import PageHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
      PageHeader
  }
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>
