<template>
  <div id="dashboard">
    <v-app-bar
      :src="SettingModule.assets.bgDashboard"
      color="transparent"
      prominent
      elevation="0"
    >
      <template v-slot:extension>
        <v-btn fab color="green accent-2" bottom right absolute>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-app-bar-nav-icon>
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-card v-for="n in 3" class="mt-5 mb-5" :key="n">
        <v-card-title>
          <v-row class="fill-height" align="center" justify="start">
            <v-col cols="2">
              <v-avatar size="36px">
                <img
                  alt="Avatar"
                  src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/16585277_197162840765257_3394749593936723968_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=101&_nc_ohc=CEfbTerp0WsAX-leNVc&oh=6bf8b7e7398cd4f70ffe239114ce828f&oe=5E931E23"
                />
              </v-avatar>
            </v-col>
            <v-col cols="8">
              <v-row justify="start">
                <div class="caption font-weight-bold">
                  Prof Dr. Zulham Azwar, S.Pd, M.pd
                </div>
              </v-row>
            </v-col>
            <v-col cols="2">
              <v-speed-dial
                direction="left"
                transition="slide-y-reverse-transition"
              >
                <template v-slot:activator>
                  <v-btn v-model="fab" icon>
                    <v-icon v-if="fab">mdi-close</v-icon>
                    <v-icon v-else>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-btn fab dark small color="green">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn fab dark small color="indigo">
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                <v-btn fab dark small color="red">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-speed-dial>
            </v-col>
          </v-row>
        </v-card-title>
        <v-carousel
          cycle
          height="30vh"
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-container class="fill-height">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="body-1">{{ slide }}</div>
                  <div class="caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam temporibus dignissimos commodi, ipsa non ad omnis
                    perspiciatis architecto vel reiciendis eligendi, est,
                    cupiditate blanditiis dicta aut dolorem ea repellat et!
                  </div>
                </v-row>
              </v-container>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-card-actions>
          <v-row>
            <v-col cols="4">
              <div class="caption grey--text">Lihat komentar</div>
            </v-col>
            <v-col cols="4"> </v-col>
            <v-col cols="2">
              <v-icon>favorite</v-icon>
            </v-col>
            <v-col cols="2">
              <v-icon>chat_bubble</v-icon>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      fab: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        "Siapa presiden kita?",
        "Pertanyaan kedua",
        "Pertanyaan ketiga",
        "Pertanyaan keempat",
        "Pertanyaan kelima"
      ]
    };
  },
  computed: {
    ...mapState(['SettingModule'])
  },
  mounted(){
    
  },
  methods: {
    
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
