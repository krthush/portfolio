<template>

	<div v-if="reveal" class="fade-in col">

		<h1 class="sub-heading">Startups:</h1>

        <project-list :projects="startups"></project-list>
		
	</div>

</template>

<script>

    export default {

        data: function () {
            return {
            	reveal: false,
            	revealTime: 3000,
                // revealTime: 100,
            	startups: [

            		{
            			name: 'Android app that prevents you forgetting to stay in touch.',
            			points: [
            				'Used pusher channels with google FCM to build a realtime chat platform with encryption - web & mobile.',
            				'Modified the AccessibilityService on Android to automate phone actions - specifically sending messages on other IM platforms.',
                            'Adapted NotificationListenerService to get complete tracking of phone notifications.',
                            'Designed graphics and visuals based around trees - was pretty.',
                            'Few hundred happy and active users.'
            			],
                        links: [
                            {
                                name: 'Website',
                                link: 'https://nurtureapp.co.uk/'
                            },
                            {
                                name: 'App',
                                link: 'https://nurtureapp.co.uk/'
                            },
                        ]
            		},

            		{
            			name: 'Engagement focused survey app for Web/iOS/Android actively being used by a Brandsmiths (London law firm).',
            			points: [
            				'awooww',
            				'asasaas'
            			],
                        links: [
                            {
                                name: 'Website',
                                link: 'https://nurtureapp.co.uk/'
                            }
                        ]
            		},

                    {
                        name: 'Android app that prevents yoasafu forgetting asfasfto stay in touch.',
                        points: [
                            'Used pusher channels with google FCM to build a realtime chat platform with encryption - web & mobile.',
                            'Modified the AccessibilityService on Android to automate phone actions - specifically sending messages on other IM platforms.',
                            'Adapted NotificationListenerService to get complete tracking of phone notifications.',
                            'Designed graphics and visuals based around trees - was pretty.',
                            'Few hundred happy and active users.'
                        ],
                        links: [
                            {
                                name: 'Websiasate',
                                link: 'https://nurtureapp.co.uk/'
                            },
                            {
                                name: 'Appasf',
                                link: 'https://nurtureapp.co.uk/'
                            },
                        ]
                    },

                    {
                        name: 'Android app that prevents you forgettinasfasfasfg to stay in touch.',
                        points: [
                            'Used pusher channels with google FCM to build a realtime chat platform with encryption - web & mobile.',
                            'Modified the AccessibilityService on Android to automate phone actions - specifically sending messages on other IM platforms.',
                            'Adapted NotificationListenerService to get complete tracking of phone notifications.',
                            'Designed graphics and visuals based around trees - was pretty.',
                            'Few hundred happy and active users.'
                        ],
                        links: [
                            {
                                name: 'Websiaste',
                                link: 'https://nurtureapp.co.uk/'
                            },
                            {
                                name: 'Appasas',
                                link: 'https://nurtureapp.co.uk/'
                            },
                        ]
                    },

                    {
                        name: 'Android app that prevents you forgettingasfasf to stay in touch.',
                        points: [
                            'Used pusher channels with google FCM to build a realtime chat platform with encryption - web & mobile.',
                            'Modified the AccessibilityService on Android to automate phone actions - specifically sending messages on other IM platforms.',
                            'Adapted NotificationListenerService to get complete tracking of phone notifications.',
                            'Designed graphics and visuals based around trees - was pretty.',
                            'Few hundred happy and active users.'
                        ],
                        links: [
                            {
                                name: 'Websasfite',
                                link: 'https://nurtureapp.co.uk/'
                            },
                            {
                                name: 'Appasf',
                                link: 'https://nurtureapp.co.uk/'
                            },
                        ]
                    },

            	]
            }
        },

        mounted () {

        	setTimeout(this.revealContent, this.revealTime);

        },

        methods: {

        	revealContent: function () {
        		this.reveal = true;
			}

        }

    }

</script>

<style lang="scss" scoped>

    .sub-heading {
        margin-bottom: 40px;
        font-family:'Montserrat';
        font-size: 2em;
    }
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        .sub-heading {
            font-size: 3em;
        }
    }

</style>
