<template>
    <v-list-item>
        <v-list-item-action>
            <v-icon 
                large 
                :color="this.color">
                {{this.icon}}
            </v-icon>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    name: "NavItem",
    props: ['icon', 'color']
}
</script>
