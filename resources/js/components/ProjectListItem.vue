<template>
    <div class="my-4 row">
        <div class="col mb-4">
            <div class="row">
                <div class="col-md-10" style="flex-grow: 10;">
                    <div class="row">
                        <div class="col">
                            <button class="clean-button" type="button" data-toggle="collapse" :data-target="'#collapse-points-'+id" @click="toggleMoreInfo()">
                                <span class="sub-heading">
                                    {{ project.name }}
                                </span>
                            </button>                            
                        </div>                      
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="collapse points" :id="'collapse-points-'+id">
                                <div class="my-4 points-text">
                                    <li class="list-unstyled">
                                        <ul v-for="point in project.points">{{ point }}</ul>
                                    </li>
                                </div>                
                            </div>
                        </div>
                    </div>                   
                </div>                   
                <div class="col-md-2" style="min-width: 50px; flex-grow: 10;">
                    <transition-group name="slide-fade" appear class="d-flex flex-column" tag="div">
                        <a 
                            v-if="moreInfo" 
                            v-for="(link, index) in project.links" 
                            :key="link.name" 
                            :href="link.link" 
                            class="mt-2 clean-a site-link slide-fade mx-auto"
                            :class="{ 'mt-4':(index>0) }"
                        >
                            {{ link.name }}
                        </a>
                    </transition-group>
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
        },

        methods: {

            toggleMoreInfo: function(event) {

                this.moreInfo = !this.moreInfo

                /* If scroll at bottom, auto scrolls down for user */
                // var d = document.documentElement;
                // var offset = d.scrollTop + window.innerHeight;
                // var height = d.offsetHeight;
                // if (offset >= height) {
                //     $('html, body').animate({ scrollTop: document.body.scrollHeight }, 500);
                // }

            }

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
        padding: 0px;
        list-style-type: none;
    }

</style>
