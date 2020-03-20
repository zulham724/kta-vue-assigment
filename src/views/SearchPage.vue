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

      <v-toolbar-title>Search</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container fluid>
      <v-row>
          <v-col cols="12">
              <v-text-field solo label="Search"></v-text-field>
              <v-list two-line style="background-color:black;text-align:left" dark>
                <template v-for="(item, index) in items">
                 
                    <v-list-item :key="item.title">
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle class="caption grey--text" v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-list>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AssigmentItem from './../components/AssigmentItemComponent'
export default {
  data() {
    return {
        items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Zulham",
          subtitle:
            "Guru PAI"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Ardian',
          subtitle:
            "Guru PAI"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Rendi",
          subtitle:
            "Guru PAI"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Nisa",
          subtitle:
            "Guru PAI"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Bella",
          subtitle:
            "Guru PAI"
        }
      ]
    };
  },
  computed: {
    ...mapState(["SettingModule"])
  },
  components:{
      AssigmentItem
  },
  mounted() {},
  methods: {}
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
