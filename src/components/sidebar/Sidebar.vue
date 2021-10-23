<template>
    <v-navigation-drawer
        class="nav-drawer"
        app
        mini-variant
        mini-variant-width="96"
        permanent
        >
        <v-container class="fill-height d-flex flex-column justify-space-between ">
            <div class="text-center">
                <v-btn fab large color="white">

                </v-btn>
            </div>
            <v-list
                flat
                class="mt-5">
                <v-list-item-group v-model="selectedItem">
                    <NavItem v-for="(item, i) in this.listItems" :key="i" 
                        :icon="item.icon" 
                        :size="item.size"
                        :color="selectedItem !== i ? item.color : 'white'" 
                        :link="item.link"/>
                </v-list-item-group>
            </v-list>

            <v-list
                dense
                flat
                class="mt-5">
                <v-list-item v-for="(item, i) in this.socialItems" :key="i">
                    <font-awesome-icon  
                    :icon="item.icon" 
                    :size="item.size"
                    :color="item.color" />
                </v-list-item>
            </v-list>
           
        </v-container>
       
    </v-navigation-drawer>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
    name: "Sidebar",
    components: {
        NavItem
    },
    data() {
        return {
            selectedItem: 0,
            listItems: [
                {
                    icon: ["fas", "user"] ,
                    color: "black",
                    size: "lg",
                    link: "/Home"
                },
                {
                    icon: ["fas", "laptop-code"],
                    color: "black",
                    size: "lg",
                    link: "/About"
                },
                {
                    icon: ["fas", "paper-plane"],
                    color: "black",
                    size: "lg",
                    link: "/About"
                },
            ],
            socialItems: [
                {
                    icon: ["fab", "github"] ,
                    color: "black",
                    size: "md"
                },
                {
                    icon: ["fab", "linkedin"],
                    color: "black",
                    size: "sm"
                },
                {
                    icon: ["fab", "twitter"],
                    color: "black",
                    size: "sm"
                },
            ]
        }
    }
}
</script>

<style scoped>
    .nav-drawer {
        box-shadow: 3px 5px 16px 3px rgba(0,0,0,0.27);
    }
</style>
