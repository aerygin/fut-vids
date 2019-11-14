<template>
    <div class="main-wrapper">
        <div class="main-wrapper">
            <v-progress-circular v-if="isLoading"
                                 size=100
                                 color="#1565C0"
                                 width="7"
                                 :indeterminate="indeterminate">
            </v-progress-circular>
            <div v-else class="matches">
                <h3>Latest videos</h3>
                <div v-for="(match,index) in matches"
                     :key="index"
                     class="match-item">
                    {{match.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {
        },
        data: () => ({
            indeterminate: true
        }),
        computed: {
            isLoading() {
                return this.$store.state.isLoading;
            },
            matches() {
                return this.$store.state.matches;
            }
        },
        methods: {

        },
        created() {
            this.$store.dispatch('getAllMatches');
        }


    }
</script>
<style scoped>
    .main-wrapper {
        display: flex;
        justify-content: center;
    }
</style>
