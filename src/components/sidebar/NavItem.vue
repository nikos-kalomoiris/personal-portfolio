<template>
<router-link :to="this.link">
    <v-list-item active-class="active" class="list-item" :ripple="false">
        <v-list-item-icon class="icon">
            <font-awesome-icon center :color="this.color" :icon="icon" :size="size" fixed-width></font-awesome-icon>
        </v-list-item-icon>
    </v-list-item>
</router-link>
</template>

<script>
export default {
    name: "NavItem",
    props: ['icon', 'color', 'size', 'link'],
}
</script>

<style scoped>
    .list-item {
        margin: 20px 0;
    }

    .active {
        background-color: black;
        border-radius: 50%;
        text-decoration: none;
    }
</style>
