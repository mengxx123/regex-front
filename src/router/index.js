import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const All = resolve => require(['@/views/All'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Query = resolve => require(['@/views/Query'], resolve)
const Replace = resolve => require(['@/views/Replace'], resolve)
const Practice = resolve => require(['@/views/Practice'], resolve)
const Course = resolve => require(['@/views/Course'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/course',
        component: Course
    },
    {
        path: '/query',
        component: Query
    },
    {
        path: '/replace',
        component: Replace
    },
    {
        path: '/practice',
        component: Practice
    },
    {
        path: '/all',
        component: All
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
