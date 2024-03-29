<template>

	<div v-if="reveal" class="fade-in col">

        <template v-for="section in sections">

            <h1 :key="section.id" class="sub-heading">{{section.name}}:</h1>

            <project-list :projects="section.projects" :key="section.id"></project-list>

        </template>
		
	</div>

</template>

<script>

    export default {

        data: function () {
            return {
            	reveal: false,
            	revealTime: 3000,
                sections: [
                    {
                        name: 'Startups',
                        projects: [
                            {
                                name: 'Platform for influencers to easily earn money and rewards from brands',
                                points: [
                                    "Website built using Next.js and Vercel (thereby being serverless and very scalable). Used ISR (incremental static regeneration) with SWR (stale-while-revalidate) so that pages are cached and served with data as quickly as possible.",
                                    "Designed and built front-end UI for sharing favorite products similar to Instagram's UI for photos.",
                                    "Built an API to generate an entire 'post' just from a product link or name - this involved using web scrapping techniques to fetch link previews (images + description) as well as using a SERP (search engine results page) API for further product information and easy posting.",
                                    "Setup platform to link with many affiliate providers (Awin, CJ, Sovrn, etc.) for shared products to automatically start earning commissions for influencers.",
                                    "Linked platform to Youtube APIs so that influencers can easily manage their product links for their video descriptions through Faved."
                                ],
                                links: [
                                    {
                                        name: 'Website',
                                        link: 'https://myfaved.co'
                                    },
                                    {
                                        name: 'Link Previews',
                                        link: 'https://krthush.medium.com/how-to-create-link-previews-like-social-media-apps-open-source-api-45797d758200'
                                    },
                                ]
                            },
                            {
                                name: 'Engagement survey app for Web/iOS/Android actively used by Brandsmiths (London law firm).',
                                points: [
                                    'Coded with Nativescript for rapid cross-platform development - also leveraged webviews to keep shared codebase for major UI components.',
                                    'Collaborated with head partner of the firm to make app for better informed appraisal decisions.',
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
                                    'Worked with large AWS tech stack: Kinesis Firehose for stream data from desktop app, Lambdas for data processing, DynamoDB & S3 for storage.',
                                    'Developed desktop app leveraging Windows Hooks for deep level of desktop usage tracking.',
                                    'Experimented with noob levels of ML for categorizing desktop work log data.'
                                ],
                                links: [
                                    {
                                        name: 'Pitchdeck',
                                        link: '/download/emit_pitchdeck.pdf'
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
                        ]
                    },
                    {
                        name: 'Projects',
                        projects: [
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
                                name: 'Unity game project focused on building a solid foundation for 2D movement.',
                                points: [
                                    'Built using the unity game engine, but without using the standard physics engine (no rigidbodies / 2D physics - which allows for tighter controls).',
                                    'Project open sourced, with easy to follow documentation on github.',
                                    'Positive feedback from devs (3.8k video views, 150 likes, 20 github stars).'
                                ],
                                links: [
                                    {
                                        name: 'Youtube',
                                        link: 'https://www.youtube.com/watch?v=SVACshnciMk'
                                    },
                                    {
                                        name: 'Github',
                                        link: 'https://github.com/krthush/2d-unity-movement'
                                    }
                                ]
                            },
                            {
                                name: 'A reddit style website for pain points (frequent and intense problems) and ideas.',
                                points: [
                                    'Built to help ideate for myself and rest of the emit Team (Stephen & Pius).',
                                    'Anyone with burning problems and cool ideas feel free to post!'
                                ],
                                links: [
                                    {
                                        name: 'Website',
                                        link: 'https://painpoints.co.uk/'
                                    }
                                ]
                            },
                            {
                                name: 'Chatbot to help manage and announce events for a game server.',
                                points: [
                                    'Was able to (remotely) manage an active game server through sending commands to a Discord bot (e.g. $startup to boot the server).'
                                ],
                                links: [
                                    {
                                        name: 'Github',
                                        link: 'https://github.com/krthush/dst-discord-bot'
                                    },
                                    {
                                        name: 'Discord',
                                        link: 'https://discord.gg/VbQdy8mpMD'
                                    }
                                ]
                            },
                            {
                                name: 'University learning management system (LMS) with a social media component.',
                                points: [
                                    'Built during university to try make educational content on the internet easier.',
                                    'Talked to university ICT and Engineering department to host university content + student login using SAML.',
                                    'Halted due to university studies and large work required to build entire LMS.'
                                ],
                                links: [
                                    {
                                        name: 'Website',
                                        link: 'https://makemytech.co.uk/'
                                    }
                                ]
                            },
                            {
                                name: 'Landing page for idea to use car windows as digital advertising space.',
                                points: [
                                    'Contact with numerous drivers and companies looking for advertising who showed interest.',
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
                    },
                    {
                        name: 'University',
                        projects: [
                            {
                                name: 'Project allocation website and process for engineering students.',
                                points: [
                                    'As part of my final year project, worked with head of year to improve the site.',
                                    'Created website with much friendlier UI/UX and also made it mobile friendly.'
                                ],
                                links: [
                                    {
                                        name: 'Report',
                                        link: '/download/Thushaan-Rajaratnam-ME4-Final-Report.pdf'
                                    },
                                    {
                                        name: 'Github',
                                        link: 'https://github.com/krthush/fyp'
                                    }
                                ]
                            },
                            {
                                name: 'Designed and prototyped a space manipulator (vision controlled robotic arm fit for space)',
                                points: [
                                    'As part of my 3rd year group project, made a robotic arm that was controllable by human motion and wireless up to 10m.',
                                    'Developed with Xbox Kinect, using frameworks/libraries based around vision computer vision to calculate joint angles.',
                                    'Setup all the electronics (kinect, wireless sensors, servo motors) and Arduino code around controlling them.'
                                ],
                                links: [
                                    {
                                        name: 'Video',
                                        link: '/videos/dmt.mp4'
                                    },
                                    {
                                        name: 'Report',
                                        link: '/download/Group_33_Space_Manipulator_DMT.pdf'
                                    },
                                    {
                                        name: 'Github',
                                        link: 'https://github.com/krthush/dmt'
                                    }
                                ]
                            },
                            {
                                name: 'Programmed an embedded C program to control a small rover to find an target and come back.',
                                points: [
                                    'Developed with low level embedded C (controlled PWM motors, IR/RFID readers, LCD display and more).',
                                    'Rover was unofficially - only because there werent official races year wide - the fastest.'
                                ],
                                links: [
                                    {
                                        name: 'Video',
                                        link: '/videos/ecm.mp4'
                                    },
                                    {
                                        name: 'Github',
                                        link: 'https://github.com/krthush/BombFinderV2.X'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

        created: function () {

            // giving unique keys to elements
            this.sections.forEach(function(section, sectionIndex) {
                section.id = 'section' + sectionIndex;
                section.projects.forEach(function(project, projectIndex) {
                    project.id = 'section' + sectionIndex + 'project' + projectIndex;
                    project.links.forEach(function(link, linkIndex) {
                        link.id = 'section' + sectionIndex + 'project' + projectIndex + 'link' + linkIndex;
                    });
                });
            });

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
