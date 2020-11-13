<template>
    <div class="my-4 row">
        <div class="col">
            <project-list-item :key="project.name" v-for="project in projects" :project="project"></project-list-item>  
            <button>hi im a button</button>    
            <a>hi im a link</a>    
        </div>
    </div>
</template>

<script>

    export default {

        props: [

            'projects'

        ],

        data: function () {
            return {

            }
        },

        mounted () {
        }

    }

</script>

<style lang="scss" scoped>

</style>
