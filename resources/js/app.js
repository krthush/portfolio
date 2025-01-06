/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue').default;

/**
 * Import and register components
 */
import ProjectList from './components/ProjectList.vue'
import ProjectListItem from './components/ProjectListItem.vue'
import TheWelcomeContent from './components/TheWelcomeContent.vue'
import TheWelcomeText from './components/TheWelcomeText.vue'
import AppHeader from './components/AppHeader.vue'

// Register components globally
Vue.component('project-list', ProjectList)
Vue.component('project-list-item', ProjectListItem)
Vue.component('the-welcome-content', TheWelcomeContent)
Vue.component('the-welcome-text', TheWelcomeText)
Vue.component('app-header', AppHeader)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
