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
            	revealTime: 100,
            	startups: [

            		{
            			name: 'Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch.Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch.Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch.',
            			points: [
            				'awooww',
            				'asasaas'
            			]
            		},

            		{
            			name: ' Android app that stops you forgetting to stay in touch. Android app that stops you forgetting to stay in touch.',
            			points: [
            				'awooww',
            				'asasaas'
            			]
            		},

            		{
            			name: 'project 3',
            			points: [
            				'awooww',
            				'asasaas'
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
        margin-bottom: 40px;
        font-family:'Montserrat';
    }

</style>
