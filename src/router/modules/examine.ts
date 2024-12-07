export default {
  path: "/examine",
  redirect: "/examine/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "中期质量检查",
    rank: 14
  },
  children: [
    {
      path: "/examine/examine_write",
      name: "examine_write",
      component: () => import("@/views/examine/examine_write.vue"),
      meta: {
        title: "中期质量检查填报"
      }
    },
    {
      path: "/examine/examine_approval",
      name: "examine_approval",
      component: () => import("@/views/examine/examine_approval.vue"),
      meta: {
        title: "中期质量检查审批"
      }
    }
  ]
} satisfies RouteConfigsTable;
