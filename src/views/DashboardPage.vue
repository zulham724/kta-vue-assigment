<template>
  <div id="dashboard">
    <v-app-bar
      :src="SettingModule.assets.bgDashboard"
      color="transparent"
      prominent
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon>
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="$router.push('search')">
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon @click="$router.push('favorite')">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon disabled>
        <v-icon style="transform: rotate(-20deg)">mdi-send</v-icon>
      </v-btn>

    </v-app-bar>
    <v-container>
      <assigment-item v-for="n in 9" :key="n"></assigment-item>
    </v-container>

    <!-- buat Bikin  -->
    <v-speed-dial fixed app style="bottom:8vh;right:5vw" v-model="fab">
      <template v-slot:activator>
        <v-btn v-model="fab" color="brown darken-4" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-folder-plus-outline</v-icon>
        </v-btn>
      </template>
      <v-btn
        @click="$router.push('build')"
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-format-list-bulleted-type</v-icon>
      </v-btn>
      <v-btn
        @click="$router.push('create')"
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-speed-dial>
    <!-- end buat Bikin  -->

  </div>
</template>

<script>
import {mapState} from 'vuex'
import AssigmentItem from './../components/AssigmentItemComponent'
export default {
  data() {
    return {
      fab: false,
    };
  },
  components:{
    AssigmentItem
  },
  computed: {
    ...mapState(['SettingModule'])
  },
  mounted(){
    
  },
  methods: {
    getAssigments: function(done){
      done()
    }
  },
};
</script>

<style scoped>
#dashboard {
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("./../assets/bg-home.jpg");
  background-size: cover; */
  height: 100%;
}
</style>
