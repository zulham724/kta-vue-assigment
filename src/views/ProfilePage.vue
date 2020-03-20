<template>
  <div>
    <v-app-bar
      color="black"
      dense
      dark
      fixed
      app
      style="border-style:inset;border-color:grey;"
    >
      <v-toolbar-title>Azuuar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-reorder-horizontal</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="$router.push('login')">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container fluid>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="3">
          <v-avatar size="10vh">
            <v-img :src="SettingModule.assets.avatar"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col cols="4">
              <div class="body-2 font-weight-bold white--text">20</div>
              <div class="body-2 white--text">Tugas</div>
            </v-col>
            <v-col cols="4">
              <div class="body-2 font-weight-bold white--text">20</div>
              <div class="body-2 white--text">Disukai</div>
            </v-col>
            <v-col cols="4">
              <div class="body-2 font-weight-bold white--text">20</div>
              <div class="body-2 white--text">Menyukai</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <div class="body-2 font-weight-bold white--text">20</div>
              <div class="body-2 white--text">Dijawab</div>
            </v-col>
            <v-col cols="4">
              <div class="body-2 font-weight-bold white--text">20</div>
              <div class="body-2 white--text">Memakai</div>
            </v-col>
            <v-col cols="4">
              <div class="body-2 font-weight-bold white--text">20</div>
              <div class="body-2 white--text">Terverifikasi</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row style="text-align:left">
        <v-col cols=" ">
          <div class="body-2 font-weight-bold white--text">Prof Dr Zulham Azwar Achmad, S.Pd.,M.Pd.</div>
          <a target="_blank" href="https://ardata.co.id" style="text-decoration:none" class="body-2 blue--text">https://ardata.co.id</a>
          <div class="caption white--text">Nothing to say about me</div>
        </v-col>
      </v-row>
      <v-divider dark></v-divider>
      <v-row>
        <v-col cols="12">
          <assigment-item v-for="n in 9" :key="n"></assigment-item>
        </v-col>
      </v-row>
    </v-container>

    <!-- buat logout  -->
    <!-- <v-speed-dial fixed app style="bottom:10vh;right:7vw" v-model="fab">
      <template v-slot:activator>
        <v-btn @click="$router.push('login')" color="brown darken-4" dark fab>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </template>
    </v-speed-dial> -->
    <!-- end buat logout  -->
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import AssigmentItem from './../components/AssigmentItemComponent'
export default {
  name: 'Home',
  components: {
    AssigmentItem
  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    ...mapState(['SettingModule']),
  }
}

</script>
