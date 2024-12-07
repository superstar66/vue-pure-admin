export default {
  path: "/topic_choice",
  redirect: "/topic_choice/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "选题申报与审批",
    rank: 11
  },
  children: [
    {
      path: "/topic_choice/topic_choice",
      name: "topic_choice",
      component: () => import("@/views/topic_choice/topic_choice.vue"),
      meta: {
        title: "选题"
      }
    },
    {
      path: "/topic_choice/topic_choice_approval1",
      name: "topic_choice_approval1",
      component: () =>
        import("@/views/topic_choice/topic_choice_approval1.vue"),
      meta: {
        title: "教师选题审批"
      }
    },
    {
      path: "/topic_choice/topic_choice_approval2",
      name: "topic_choice_approval2",
      component: () =>
        import("@/views/topic_choice/topic_choice_approval2.vue"),
      meta: {
        title: "教科办选题审批"
      }
    }
  ]
} satisfies RouteConfigsTable;
