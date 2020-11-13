<template>
    <div class="my-4 row">
        <div class="col-md-10 d-flex align-items-center">
        	<h3>{{ project.name }}</h3>
        </div>
        <div class="col-md-2">
            <a href="#" class="clean-a mx-4 my-4 d-none d-md-block"><i class="material-icons md-48">read_more</i></a>
            <button class="clean-button mx-4 my-auto d-md-flex float-md-none float-right" @click="moreInfo = !moreInfo">
                <i class="material-icons md-48" :class="{ flip: moreInfo, 'flip-back': !moreInfo }">expand_more</i>
            </button>
        	<a href="#" class="clean-a mx-4 my-4 d-md-none float-right"><i class="material-icons md-48">read_more</i></a>
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
                moreInfo: false
            }
        },

        mounted () {
        }

    }

</script>

<style lang="scss" scoped>

    $default-transition: all .2s ease-in-out;

    ul {
        padding: 0;
        list-style-type: none;
    }

    .material-icons.md-48 { 
        font-size: 48px; 
    }

    .expand-icon {
        position: absolute;
        bottom: 0;
    }

    .flip {
        transition: $default-transition;
        transform: scaleY(-1);       
    }

    .flip-back {
        transition: $default-transition;
        transform: scaleY(1);       
    }

</style>
