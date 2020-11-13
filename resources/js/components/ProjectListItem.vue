<template>
    <div class="my-4 row">
        <div class="col mb-4">
            <div class="row">
                <div class="col-10" style="flex-grow: 10;">
                    <div class="row">
                        <div class="col">
                            <button class="clean-button" type="button" data-toggle="collapse" :data-target="'#collapse-points-'+id" @click="moreInfo = !moreInfo">
                                <span class="sub-heading">
                                    {{ project.name }}
                                </span>
                            </button>                            
                        </div>                      
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="collapse" :id="'collapse-points-'+id">
                                <div class="my-4 points-text">
                                    <li class="list-unstyled">
                                        <ul v-for="point in project.points">{{ point }}</ul>
                                    </li>
                                </div>                
                            </div>
                        </div>
                    </div>                   
                </div>                   
                <div class="col-2 d-flex flex-column" style="min-width: 50px; flex-grow: 10;">
                    <a v-if="moreInfo" v-for="link in project.links" :key="link.name" :href="link.link" class="my-2 clean-a site-link slide-fade ml-auto">
                        {{ link.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

    	props: [

            'project'

        ],

        data: function () {
            return {
                id: null,
                moreInfo: false
            }
        },

        mounted () {

            this.id = this._uid;

            $('.collapse').on('show.bs.collapse', function () {
                // console.log("hi");
            });
        }

    }

</script>

<style lang="scss" scoped>

    $default-transition: all .2s ease-in-out;

    .sub-heading {
        font-family:'Montserrat';
        border-bottom: 2px solid #fff;
        padding-bottom: 5px;
        font-size: 1.5em;
    }
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        .sub-heading {
            font-size: 2em;
        }
    }

    .site-link {
        font-family:'Montserrat';
        padding-bottom: 5px;
        font-size: 1.5em;
    }

    .points-text {
        font-family:'Montserrat';
        font-size: 1em;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

</style>
