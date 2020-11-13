<template>
    <div class="mt-4 row margin-b">
        <div class="col">
            <project-list-item :key="project.name" v-for="project in projects" :project="project"></project-list-item>  
        </div>
    </div>
</template>

<script>

    export default {

        props: [

            'projects'

        ],

    }

</script>

<style lang="scss" scoped>
    .margin-b {
        margin-bottom: 60px;
    }
</style>
