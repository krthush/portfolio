<template>

	<div v-if="reveal" class="fade-in col">

		<h1 class="sub-heading">Startups:</h1>

        <project-list :projects="startups"></project-list>

        <h1 class="sub-heading">Websites:</h1>

        <project-list :projects="startups"></project-list>
		
	</div>

</template>

<script>

    export default {

        data: function () {
            return {
            	reveal: false,
            	revealTime: 3000,
            	startups: [

            		{
            			name: 'Android app that prevents you forgetting to stay in touch.',
            			points: [
            				'Built a realtime chat platform with encryption (web & mobile) using usher channels with google FCM.',
                            'Adapted the Notification Listener Service to get complete tracking of phone notifications.',
            				'Modified the Accessibility Service to automate phone actions - specifically sending messages on other IM platforms.',
                            'Designed graphics and visuals based around trees - was pretty.',
                            '300+ happy and active users.'
            			],
                        links: [
                            {
                                name: 'Website',
                                link: 'https://nurtureapp.co.uk/'
                            },
                            {
                                name: 'App',
                                link: 'https://play.google.com/store/apps/details?id=com.devemperor.projects.ezchat&hl=en_GB'
                            },
                        ]
            		},

            		{
            			name: 'Engagement survey app for Web/iOS/Android actively used by Brandsmiths (London law firm).',
            			points: [
                            'Coded with Nativescript for rapid cross-platform development - also leveraged webviews to keep shared codebase for major UI components.',
            				'Collaborated with head partner of the firm to allow for better informed appraisal desicions.',
                            'Paid for by the firm, with potential for further expansion and work.',
            			],
                        links: [
                            {
                                name: 'Website',
                                link: 'https://emitapp.co.uk/'
                            }
                        ]
            		},

                    {
                        name: 'Desktop & Web time tracking app aimed at automating lawyer timesheets - seed round funded.',
                        points: [
                            'Succesfully fund raised 150k from angel investors, unfortunately had to shutdown after 1 year due to lack of traction.',
                            'Worked with large AWS tech stack: Kinesis Firehose for stream data from desktop app, Lambdas for data processing, DynamoDB & S3 for storage,',
                            'Developed desktop app leveraging Windows Hooks allowing for very deep level of desktop usage tracking.',
                            'Experimented with noob levels of ML for categorizing desktop work log data.'
                        ],
                        links: [
                            {
                                name: 'Pitchdeck',
                                link: '/emit-pitchdeck'
                            },
                            {
                                name: 'Website',
                                link: 'https://emitapp.co.uk/'
                            },
                        ]
                    },

                    {
                        name: 'Created a productivity smartwatch with a succesful Kickstarter campaign and delivery.',
                        points: [
                            'Used pusher channels with google FCM to build a realtime chat platform with encryption - web & mobile.',
                            'Modified the AccessibilityService on Android to automate phone actions - specifically sending messages on other IM platforms.',
                            'Adapted NotificationListenerService to get complete tracking of phone notifications.',
                            'Designed graphics and visuals based around trees - was pretty.',
                            'Few hundred happy and active users.'
                        ],
                        links: [
                            {
                                name: 'Kickstarter',
                                link: 'https://www.kickstarter.com/projects/thush/emit-smartwatch-change-your-perspective-on-time'
                            },
                            {
                                name: 'Website',
                                link: 'https://ownemit.com/'
                            },
                        ]
                    }

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
