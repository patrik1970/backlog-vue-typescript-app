import Vue from 'vue';
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        alias: "/issuetable",
        name: "issuetable",
        component: () => import("../components/IssueTable.vue")
    },
    {
        path: "/issue-card/:id",
        name: "issue-card",
        component: () => import("../components/IssueCard.vue")
    },
    {
        path: "/add-card",
        name: "add-card",
        component: () => import("../components/AddCard.vue")
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.Base_URL,
    routes
});

export default router;