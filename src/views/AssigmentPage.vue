<template>
  <div>
      <v-app-bar
      :src="SettingModule.assets.bgDashboard"
      color="transparent"
      prominent
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Assigment</v-toolbar-title>

    </v-app-bar>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['SettingModule'])
    },
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>