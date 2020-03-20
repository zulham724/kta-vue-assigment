<template>
  <v-card class="mt-5 mb-5" dark style="background-color:#15181C;border-color:grey;border-style:solid;border-width:thin">
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
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
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
          hide-delimiters
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet color="black" height="100%">
              <v-icon style="position:absolute;transform: rotate(20deg); right: 10vw;top: 10vh; font-size:30vw;opacity:0.5" color="grey">mdi-book-open-page-variant</v-icon>
              <v-container class="fill-height">
                <v-row class="fill-height" align="center" justify="start">
                  <div class="body-1 ml-3">{{ slide }}</div>
                  <div class="caption white--text ma-3" style="text-align:justify">
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
          <v-row align="center" style="text-align:justify">
            <v-col cols="4">
              <div class="caption grey--text">Lihat komentar</div>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="2">
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn icon @click="$router.push('comment')">
                <v-icon>chat_bubble</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn icon @click="$router.push('assigment')">
                <v-icon>mdi-book-open-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    data(){
        return {
            colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4"
            ],
            slides: [
                "Siapa presiden kita?",
            ]
        }
    }
}
</script>

<style>

</style>