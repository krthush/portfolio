<template>
    <nav class="navbar justify-content-end fix-top">

        <a class="header-link mx-4 d-none d-md-block" href="#">Github</a>
        <a class="header-link mx-4 d-none d-md-block" href="#">LinkedIn</a>
        <a class="header-link mx-4 d-none d-md-block" href="#">CV</a>
        <a class="header-link mx-4 d-none d-md-block" href="#">About me</a>

        <div class="nav-icon-holder d-flex align-items-center d-md-none">
            <div class="nav-icon mx-auto" :class="{ open: mobileNav }" @click="mobileNav = !mobileNav">
              <div></div>
            </div>            
        </div>

        <div class="mobile-nav d-md-none d-flex justify-content-center align-items-center" :class="{ open: mobileNav }">
            <li class="list-unstyled text-center">
                <ul><a v-if="mobileNav" class="fade-in header-link" href="#">Github</a></ul>
                <ul><a v-if="mobileNav" class="fade-in header-link" href="#">LinkedIn</a></ul>
                <ul><a v-if="mobileNav" class="fade-in header-link" href="#">CV</a></ul>
                <ul><a v-if="mobileNav" class="fade-in header-link" href="#">About me</a></ul>
            </li>
        </div>

    </nav>
</template>

<script>

    export default {

        data: function () {
            return {
              mobileNav: false
            }
        }

    }

</script>

<style lang="scss" scoped>

    @import '~bootstrap/scss/bootstrap';

    $default-transition: all .2s ease-in-out;

    nav.navbar {
        transform-origin: top;
        height: 100px;
    }

    @include media-breakpoint-down(md) {
        .fix-top {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030;
        }
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a.header-link {
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        padding: 15px 20px;
        position: relative;
        font-weight: bold;
        &:after {    
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: #fff;
            transition: $default-transition;
            width: 0;
        }
        &:hover:after { 
            width: 100%; 
            left: 0; 
        }
    }

    .nav-icon-holder {
        height: 50px;
        width: 50px;
        background-color: #232833;
        border-radius: 50%;
    }

    .nav-icon {
        width: 20px;
        z-index: 5000;
        &:after, &:before, & div {
            background-color: #fff;
            border-radius: 3px;
            content: '';
            display: block;
            height: 2.5px;
            margin: 3.5px 0;
            transition: $default-transition;
        }
        &.open {
            &:before {
              transform: translateY(6px) rotate(45deg);
            }
            &:after {
              transform: translateY(-6px) rotate(-45deg);
            }
            div {
              transform: scale(0);
            }
        }
    }

    .mobile-nav {
        background-color: black; 
        position: absolute; 
        z-index: 3000;
        width: 100%;
        height: 0px;
        top: 0px;
        left: 0px;
        transition: height 1s ease-in-out;
        &.open {
            height: 100vh;
        }
    }

</style>
