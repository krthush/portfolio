<template>
    <div class="my-4 row">
        <div class="col-md-9">
        	<h3>{{ project.name }}</h3>
        </div>
        <div class="col-md-3 d-flex justify-content-end align-items-center">
        	<a class="mx-4 my-4"><i class="material-icons">read_more</i></a>
        	<button class="mx-4 my-4"><i class="material-icons">expand_more</i></button>
        </div>
    	<!-- <li class="list-unstyled">
    		<ul v-for="point in project.points">{{ point }}</ul>
    	</li> -->
    </div>
</template>

<script>

    export default {

    	props: [

            'project'

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

    ul {
        padding: 0;
        list-style-type: none;
    }

</style>
