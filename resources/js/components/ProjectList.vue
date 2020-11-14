<template>
    <div class="mt-4 row margin-b">
        <div class="col">
            <project-list-item v-for="project in projects" :key="project.name" :project="project"></project-list-item>  
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
