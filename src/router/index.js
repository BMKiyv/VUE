/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Todos from '../components/todos'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/todos/:name',
            component: Todos,
            props: true
        }
    ],
    mode: 'history'
})