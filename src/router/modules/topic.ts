export default {
  path: "/topic",
  redirect: "/topic/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "课题申报与审批",
    rank: 10
  },
  children: [
    {
      path: "/topic/topic_declaration",
      name: "topic_declaration",
      component: () => import("@/views/topic/topic_declaration.vue"),
      meta: {
        title: "课题申报",
        // roles: ['teacher'],
        showParent: true
      }
    },
    {
      path: "/topic/topic_approval",
      name: "topic_approval",
      component: () => import("@/views/topic/topic_approval.vue"),
      meta: {
        title: "课题审批",
        showParent: true,
        // roles: ['office']
      }
    }
  ]
} satisfies RouteConfigsTable;
