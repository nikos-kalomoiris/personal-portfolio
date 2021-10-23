<template>
  <v-main class="container">
    <HeroSection />
        <HeroSection />

  </v-main>
</template>

<script>
import HeroSection from "./sections/HeroSection.vue"

export default {
  name: 'Main',
  components: {
    HeroSection
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: black;
    color: white;
    height: 100%;
  }
</style>
