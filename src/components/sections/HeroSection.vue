<template>
  <v-container fluid class="hero fill-height">
    <v-row>
      <v-col
      align-self="center"
      md="5" 
      offset="1">
        <v-row>
          <p class="text-h5">{{ this.intro }}</p>
        </v-row>
        <v-row>
          <h1 class="text-h2">{{ this.title }}</h1>
        </v-row>
        <v-row>
          <p class="text-h4">{{ this.subTitle }}</p>
        </v-row>
        <v-row>
          <p class="text-h5">{{ this.description }}</p>
        </v-row>
      </v-col>
      <v-col
        md="2"
        offset="2"
        align-self="center">
        <font-awesome-icon :icon="['fab', 'react']" size="10x"></font-awesome-icon>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
      return {
        intro: "Hi, my name is",
        title: "Nick Kalomoiris",
        subTitle: "I love coding and drinking coffee.",
        description: "I am a fullstack software engineer specializing in web applications. Sometimes, i like to design ui/ux experiences and study blockchain and smart contracts."
      }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    .hero {
        padding-bottom: 5em;
    }

    .text-h2, .text-h5, .text-h4 {
        font-family: 'Montserrat', sans-serif !important;
        margin-bottom: 36px;
    }

    .text-h2 {
        font-weight: 600;
    }

    .text-h4 {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.4);
    }

    .text-h5, .text-h4 {
        padding-left: 5px;
    }
</style>