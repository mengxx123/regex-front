import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Index = resolve => require(['@/views/Index'], resolve)
const All = resolve => require(['@/views/All'], resolve)
const AllHelp = resolve => require(['@/views/AllHelp'], resolve)
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
        path: '/index',
        component: Index
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
        path: '/all/help',
        component: AllHelp
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
