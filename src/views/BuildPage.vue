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

      <v-toolbar-title>Build new Assigment</v-toolbar-title>

    </v-app-bar>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field solo label="Kelas"></v-text-field>
                <v-text-field solo label="Bentuk"></v-text-field>
                <v-text-field solo label="Kompetensi Dasar"></v-text-field>
                <v-text-field solo label="Materi"></v-text-field>
                <v-text-field solo label="Indikator"></v-text-field>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['SettingModule'])
    }
}
</script>

<style>

</style>