<template>
  <div id="home">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-bottom-navigation
      active.sync="recent"
      fixed
      app
      grow
      background-color="#FFD838"
      height="48px"
    >
      <v-btn text>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn text>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-btn text>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>

      <v-btn text>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
}
</script>

<style type="text/css">
  #home{
    /* color: */
    height: 100%;
  }
</style>