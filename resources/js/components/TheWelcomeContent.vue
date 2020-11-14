<template>

	<div v-if="reveal" class="fade-in col">

		<h1 class="sub-heading">Startups:</h1>

        <project-list :projects="startups"></project-list>

        <h1 class="sub-heading">Websites:</h1>

        <project-list :projects="websites"></project-list>
		
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
            				'Built a realtime chat platform with encryption (web & mobile) using pusher channels with google FCM.',
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
            				'Collaborated with head partner of the firm to make app for better informed appraisal desicions.',
                            'Paid for by the firm, currently in use with potential for further expansion and work.',
            			],
                        links: [
                            {
                                name: 'Website',
                                link: 'https://emitapp.co.uk/'
                            },
                            {
                                name: 'iOS',
                                link: 'https://apps.apple.com/gb/app/emit-coach/id1494521879?ign-mpt=uo%3D2'
                            },
                            {
                                name: 'Android',
                                link: 'https://play.google.com/store/apps/details?id=com.emit.app&hl=en_GB'
                            }
                        ]
            		},

                    {
                        name: 'Desktop & Web time tracking app aimed at automating lawyer timesheets - seed round funded.',
                        points: [
                            'Successfully fund raised £150k from angel investors, unfortunately had to shutdown after 1 year due to lack of traction.',
                            'Worked with large AWS tech stack: Kinesis Firehose for stream data from desktop app, Lambdas for data processing, DynamoDB & S3 for storage,',
                            'Developed desktop app leveraging Windows Hooks for deep level of desktop usage tracking.',
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
                            'Successfully funded and delivered Kickstarter for £13k with 180 backers.',
                            'Worked with OEM suppliers from China to modify and build smartwatch.',
                            'Made early prototypes with an Android smartwatch app, then modified to work with OEM watches using the OpenWatch TWRP.',
                            'Brand building - designed website, promoted social media, shot photos, videos and more.',
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
                            {
                                name: 'Instagram',
                                link: 'https://www.instagram.com/emitwatch/'
                            }
                        ]
                    }

            	],
                websites: [

                    {
                        name: 'Landing page for idea to use car windows as digital advertising space.',
                        points: [
                            'Contact with numerou drivers and companies looking for advertising who showed interest.',
                            'Tested with smartphone/portable screen combination.',
                            'Did not continued due to high cost of screen vs. size/ease of viewing from far outside car.',
                        ],
                        links: [
                            {
                                name: 'Website',
                                link: 'https://karvert.co.uk/'
                            }
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
