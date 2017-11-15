<template>
    <v-toolbar fixed class="blue" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})">
                FoodieTracker
            </span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark
                @click="navigateTo({name:'register'})">
                    Sign up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
    .home{
        cursor: pointer;
    }
    .home:hover{
        color: #E9E;
    }
</style>
