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
        <v-icon>notifications_active</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Notification</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-tabs grow background-color="black" dark v-model="tab">
      <v-tab href="#student">Murid</v-tab>
      <v-tab href="#teacher">Guru</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" style="text-align:left;">
      <v-tab-item value="student">
        <v-list three-line style="background-color:black" dark>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-tab-item>
      <v-tab-item value="teacher">
        <v-list three-line style="background-color:black" dark>
          <template v-for="(item, index) in items2">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tab: null,
      items: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Ardian",
          subtitle:
            "Mengerjakan Tugas anda dengan nilai 10/10"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Azwar',
          subtitle:
            "Menyukai Tugas anda"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Rendi",
          subtitle:
            "Mengerjakan tugas anda dengan nilai 4/10"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Bella",
          subtitle:
            "Tugas anda dimulai untuk kelas 1 SMP pada jam 11.30"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Nisa",
          subtitle:
            "Bolos sekolah"
        }
      ],
      items2: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Ardian",
          subtitle:
            "Menggunakan Soal anda"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Azwar',
          subtitle:
            "Menyukai Tugas anda"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Rendi",
          subtitle:
            "Mengomentari Tugas anda"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Bella",
          subtitle:
            "Menyukai tugas anda"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Nisa",
          subtitle:
            "Memberikan rating 10/10"
        }
      ]
    };
  },
  computed: {
    ...mapState(["SettingModule"])
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
