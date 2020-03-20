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
      dark
      style="border-style:inset;border-color:grey;background-color:black"
      height="48px"
    >
      <v-btn text @click="$router.push('dashboard')">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn text @click="$router.push('notif')">
        <v-icon>notifications_active</v-icon>
      </v-btn>

      <v-btn text @click="$router.push('profile')">
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