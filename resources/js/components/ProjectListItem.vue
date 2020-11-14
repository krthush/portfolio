<template>
    <div class="my-4 row">
        <div class="col mb-4">
            <div class="row">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col">
                            <button class="clean-button" type="button" data-toggle="collapse" :data-target="'#' + project.id + 'points'" @click="toggleMoreInfo()">
                                <span class="sub-heading">
                                    {{ project.name }}
                                </span>
                            </button>                            
                        </div>                      
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="collapse points" :id="project.id + 'points'">
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
                        <template v-if="moreInfo" v-for="(link, index) in project.links">
                            <button 
                                v-if="link.name=='Video'"
                                :key="link.id"
                                :class="{ 'mt-4':(index>0) }"
                                class="mt-2 clean-button site-link slide-fade mx-auto"
                                type="button" 
                                data-toggle="modal" 
                                :data-target="'#' + link.id + 'modal'"
                                @click="videoClicked(link.id + 'video')"
                                >
                                Video
                            </button>
                            <a
                                v-else 
                                :key="link.id"
                                :href="link.link" 
                                :class="{ 'mt-4':(index>0) }"
                                class="mt-2 clean-a site-link slide-fade mx-auto"
                            >
                                {{ link.name }}
                            </a>                            
                        </template>
                    </transition-group>
                </div>
            </div>
            <!-- Modal -->
            <div v-for="link in videoLinks" class="modal modal-wide fade" :id="link.id + 'modal'" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered video-dialog" role="document">
                <div class="modal-content video-content">
                    <div class="modal-body">
                        <div class="row w-100">
                            <div class="col-12 relative-position p-0">
                                <button type="button" class="close close-btn" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                                <video :id="link.id + 'video'" controls class="w-100">
                                    <source :src="link.link" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
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
                moreInfo: false,
                videoLinks: []
            }
        },

        created: function () {

            // fetching only the video links
            this.videoLinks = this.project.links.filter(function(link){
                return link.name == 'Video';
            });

        },

        mounted: function () {

            this.videoLinks.forEach(function(link) {
                $("#" + link.id + "modal").on('hidden.bs.modal', function (e) {
                    var vid = document.getElementById(link.id + "video");
                    vid.pause();
                });
            });

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

            },

            videoClicked: function (videoId) {
                var vid = document.getElementById(videoId);
                vid.play();
            }

        }

    }

</script>

<style lang="scss" scoped>

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


    .video-dialog {
        max-width: 100%;
        width:  100%;
    }
    @media screen and (min-width: 768px) {
        .video-dialog {
            max-width: 80%;
            width:  80%;
        }
    }
    .video-content {
        background-color: transparent;
        border: none;
    }
    .relative-position {
        position: relative;
    }

</style>
