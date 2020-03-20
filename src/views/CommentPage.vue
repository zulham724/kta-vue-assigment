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

      <v-toolbar-title>Comment</v-toolbar-title>

    </v-app-bar>

    <v-container class="text-left">
      <v-row>
        <v-col cols="2">
          <v-avatar>
                <img
                  alt="Avatar"
                  src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/16585277_197162840765257_3394749593936723968_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=101&_nc_ohc=CEfbTerp0WsAX-leNVc&oh=6bf8b7e7398cd4f70ffe239114ce828f&oe=5E931E23"
                />
              </v-avatar>
        </v-col>
        <v-col cols="10" style="text-align:justify">
          <div class="body-2 white--text">Zulham Azwar Achmad</div>
          <div class="caption white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quas tempore dolorem, consequatur repudiandae quae a eius deserunt accusantium distinctio ipsa magnam perspiciatis earum eligendi fugit quod deleniti dolore praesentium.</div>
          <div class="caption grey--text">Baru saja</div>
        </v-col>
      </v-row>
      <hr />
      
      <transition-group name="fadeLeft">
        
      </transition-group>

    </v-container>

    <!-- tambah komentar -->
    <v-bottom-navigation background-color="black" fixed app :value="true" active.sync="value" shift color="white">
      <v-row no-gutters align="start">
        <v-col cols="2">
          <v-avatar>
            <img
                alt="Avatar"
                src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/16585277_197162840765257_3394749593936723968_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=101&_nc_ohc=CEfbTerp0WsAX-leNVc&oh=6bf8b7e7398cd4f70ffe239114ce828f&oe=5E931E23"
            />
            </v-avatar>
        </v-col>
        <v-col cols="8">
          <v-form lazy-validation ref="comment">
            <v-text-field
              solo
              label="Tambahkan Komentar..."
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-btn icon x-large>
            <v-icon color="white">send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-bottom-navigation>

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