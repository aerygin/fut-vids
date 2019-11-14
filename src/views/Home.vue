<template>
    <div class="home">
        <h2>FutVids</h2>
        <v-btn rounded>Hello</v-btn>
    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios';

    export default {
        name: 'home',
        components: {
        },
        data: () => ({
            res:[]
        }),
        mounted() {
            axios.get("https://www.scorebat.com/video-api/v1/")
                .then(response => {
                    this.res = response.data;
                })
        }

    }
</script>
