<template>
    <div class="col welcome-text text-center">
        <div id="typed-strings">
          <p>Hi, I'm Thush</p>
          <p>Here you'll find what I've made.</p>
        </div>
        <span id="typed"></span>        
    </div>
</template>

<script>

    import Typed from 'typed.js';

    export default {

        data: function () {
            return {

            }
        },

        mounted () {

            var typed = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed: 20,
                fadeOut: true
            });

        }

    }

</script>

<style lang="scss" scoped>

    .welcome-text {
        font-size: 6vh;
        margin-top: 30vh;
        margin-bottom: 15vh;
    }

</style>
