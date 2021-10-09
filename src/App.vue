<template>
  <v-app>
    <v-navigation-drawer
      app
      dark
      mini-variant
      mini-variant-width="96"
      permanent
    >
     <v-list
        dense
        nav
      >
        <NavItem color="blue" icon="mdi-account-circle"/>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer 
      padless
      app>
      hello world
    </v-footer>
  </v-app>
</template>

<script>
import NavItem from "./components/NavItem.vue"
export default {
  name: 'App',
  components: {
    NavItem
  },
  data: () => ({
    //
  }),
};
</script>
