<template>
  <v-app>
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue"
export default {
  name: 'App',
  components: {
    Sidebar
  },
  data: () => ({
    //
  }),
};
</script>
