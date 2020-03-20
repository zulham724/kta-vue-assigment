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
      <v-app-bar-nav-icon @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Favorite</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <assigment-item v-for="n in 9" :key="n"></assigment-item>
    </v-container>

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
